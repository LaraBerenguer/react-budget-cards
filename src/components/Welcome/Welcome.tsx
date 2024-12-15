import { Link } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-4 sm:px-8 overflow-hidden">
            <h1 className="text-white mb-5 text-3xl sm:text-5xl flex flex-row items-center gap-2">Welcome to Cosmo!</h1>
            <div className="circle h-96 w-96 absolute bg-dark-purple-opacity-25 p-6 sm:p-8 rounded-full shadow-2xl text-center"></div>
            <div className="text-center max-w-sm w-9/10">
                <div className="mb-6 text-white sm:text-base flex flex-col gap-2">
                    <span className="text-lg"><p>Your trusted agency, here to create your dream website ✧˖°</p></span>
                    <div className=" my-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-custom-pink text-sm sm:text-base flex flex-col gap-2">
                        <span><p><b>SEO Optimization</b></p></span>
                        <span><p><b>Advertising Campaigns</b></p></span>
                        <span><p><b>Web Development</b></p></span>

                    </div>
                    <span className="my-3"><p>Ready?</p></span>
                </div>
                <Link to="/pricing" className="relative inline-flex items-center justify-center px-4 py-1.5 border-2 border-custom-purple text-white bg-transparent font-medium text-sm rounded-md transition-all duration-200 ease-in-out whitespace-nowrap hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto w-full">
                    Go to pricing</Link>
            </div>
        </div>
    )
};