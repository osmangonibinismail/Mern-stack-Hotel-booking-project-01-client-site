const Footer = () => {
    return (
        <div className="bg-gray-800 py-10">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-3xl text-white font-bold tracking-tight px-3">
                    OAI Hotel Booking
                </div>
                <div className="text-white font-bold tracking-tight grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                    <div className="cursor-pointer">Social Media</div>
                    <div className="cursor-pointer">Privacy policy</div>
                    <div className="cursor-pointer">Terms of Service</div>
                </div>
            </div>
        </div>
    )
}

export default Footer;