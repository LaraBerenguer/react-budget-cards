import { Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome.tsx";
import Pricing from "./components/Pricing/Pricing.tsx";

//App

const App = () => {
    return (

        <div className="App">
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </div>
    );
};

export default App;