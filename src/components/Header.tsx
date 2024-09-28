import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {

    const {isLoggedIn} = useAppContext();

    return (
        <div className="bg-gray-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to='/'>OAI Hotel Booking</Link>
                </span>
                <span className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-2">
                    {isLoggedIn ? <>
                    <Link className="flex items-center text-white px-3 font-bold hover:bg-sky-600" to="/my-bookings">My Booking</Link>
                    <Link className="flex items-center text-white px-3 font-bold hover:bg-sky-600" to="/my-hotels">My Hotels</Link>
                    <SignOutButton />
                    </> : 
                    <>
                    <Link to='/sign-in' 
                    className='flex items-center text-sky-600 px-3 font-bold bg-white hover:bg-gray-200'>
                        Sign In
                    </Link>
                    <Link to='/register' 
                    className='flex items-center text-sky-600 px-3 font-bold bg-white hover:bg-gray-200'>
                        Register
                    </Link>
                    </>
                    
                    }
                    
                </span>
            </div>
        </div>
    )
}

export default Header;