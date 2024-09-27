import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from '../api-client';
import { useAppContext } from "../contexts/AppContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type SignInFormData = {
    email: string;
    password: string;
}

const SignIn = () => {
    const queryClient = useQueryClient();
    const { showToast } = useAppContext();
    const navigate = useNavigate();

    const location = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>();

    const mutation = useMutation(apiClient.signIn, {
        onSuccess: async () => {
            showToast({message: "Sign in Successful!!", type: "SUCCESS"});
            await queryClient.invalidateQueries("validateToken");
            navigate(location.state?.from?.pathname || "/")
        }, onError: (error: Error) => {
            
            showToast({message: error.message, type: "ERROR"})
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data)
    });

    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Sign In</h2>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input
                    type="email" className="mt-1 bg-gray-200 rounded border border-rounded w-full py-1 px-2 font-normal" {...register("email", { required: "This field is required" })}></input>
                {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                )}
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Password
                <input
                    type="password" className="mt-1 bg-gray-200 rounded border border-rounded w-full py-1 px-2 font-normal" {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}></input>
                {errors.password && (
                    <span className="text-red-500">{errors.password.message}</span>
                )}
            </label>
            <span className="flex items-center justify-between">
                <span className="text-md">
                Don't have an account? <Link className="underline text-sky-700 font-semibold" to="/register">Create an account here</Link>
                </span>
                <button type="submit"
                    className="bg-sky-700 text-white p-2 font-semibold w-24 hover:bg-sky-600 text-xl">
                    Log in
                </button>
            </span>
        </form>
    )
}

export default SignIn;