import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/WelcomePage/Welcome.tsx";
import Pricing from "./pages/PricingPage/Pricing.tsx";

//App

const App = () => {
    return (

        <div className="App mx-auto max-w-screen-lg p-4 sm:p-8 lg:p-16">
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </div>
    );
};

export default App;