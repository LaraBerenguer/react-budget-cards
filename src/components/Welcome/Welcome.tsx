import { Link } from "react-router-dom";
import "./welcome.css";

export default function Welcome() {
    return (
        <div className="welcomeContainer">
            <div className="welcome">
                <h1>Welcome!</h1>
                <div className="description">
                    <p>We are Cosmo, the agency that helps you! Choose the services that best suit you: </p>
                    <p>- We make your website responsive for expert SEO positioning.</p>
                    <p>- We help you with your advertising campaigns.</p>
                    <p>- We create your website from scratch. Choose how many pages and languages and we will make a budget for you.</p>
                </div>
                <Link to="/pricing">Go to princing</Link>
            </div>
        </div>

    )
};