import { Link } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
    return (
        <div className="flex justify-center items-center min-h-screen px-4 sm:px-8 animate-bounce">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-sm w-9/10">
                <h1 className="mb-4 text-2xl font-semibold">Welcome to Cosmo!</h1>
                <div className="mb-6 text-custom-gray text-base sm:text-sm">
                    <p>Your trusted agency. Choose the services you need: </p>
                    <p>- SEO Optimization: We make your website responsive.</p>
                    <p>- Advertising Campaigns: Boost your visibility.</p>
                    <p>- Web Development: We build your site from scratch.</p>
                    <p>Ready?</p>
                </div>
                <Link to="/pricing" className="inline-block bg-custom-purple text-white py-2 px-6 text-base sm:text-sm sm:py-1 sm:px-4 font-bold rounded-md transition duration-300 ease-in-out animate-bounce hover:bg-dark-purple">
                Go to princing</Link>
            </div>
        </div>

    )
};