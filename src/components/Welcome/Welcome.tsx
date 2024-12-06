import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <div className="welcome">
            <h1>Welcome!</h1>
            <p>Create an estimate.</p>
            <Link to="/pricing">Go to princing</Link>
        </div>
    )
};