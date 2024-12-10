import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.tsx";
import Pricing from "./components/Pricing/Pricing.tsx";

//App

const App = () => {
    return (

        <div className="App sm:mx-8 lg:mx-16 xl:mx-24 max-w-screen-lg mx-auto">
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </div>
    );
};

export default App;