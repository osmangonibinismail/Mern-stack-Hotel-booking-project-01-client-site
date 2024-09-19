import { useFormContext } from "react-hook-form";
import { hotelType } from "../../config/hotel-options-config";

const TypeSection = () => {
    const { register, watch } = useFormContext();
    const typeWatch = watch("type");

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-3">Type</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {hotelType.map((type) => (
                    <label className={
                        typeWatch === type ? "cursor-pointer bg-sky-400 text-sm rounded-full px-4 py-2 font-semibold" : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold"
                    }>
                        <input type="radio" value={type} {...register("type", {
                            required: "This field is required",
                        })}
                        className="hidden"
                        />
                        <span>{type}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}

export default TypeSection;