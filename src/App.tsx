import React from "react";
import Card from './components/Card.tsx';
import Header from './components/Header.tsx';
import services from './data.tsx';
import TotalPrice from "./components/TotalPrice.tsx";

interface CardContext {
    description: string;
    title: string;
    price: number;
    key: number;
    isChecked: boolean;
    handleCheck: () => void;
};

/*interface priceNumber {
    calculateTotalPrice: () => number;
}*/

export interface TotalPriceProps {
    price: () => number;
}

export const cardContent = React.createContext<CardContext | null>(null);
//export const priceNumber = React.createContext<priceNumber | null>(null);

const App = () => {
    const [checkedState, setCheckedState] = React.useState<boolean[]>(Array(services.length).fill(false));

    function calculateTotalPrice() {
        let totalPrice = services.reduce((total, service, index) => {
            return checkedState[index] ? total + service.price : total;
        }, 0);

        return totalPrice;
    }

    function handleCheck(index: number) {
        let newChecked = [...checkedState];
        newChecked[index] = !newChecked[index];
        setCheckedState(newChecked);
    };

    return (

        <div className="Container">
            <Header />
            {services.map((service, index) => (
                <cardContent.Provider value={{ description: service.description, title: service.name, price: service.price, key: service.id, isChecked: checkedState[index], handleCheck: () => handleCheck(index) }}>
                    <Card />
                </cardContent.Provider>
            ))}
            {/*<priceNumber.Provider value={{ calculateTotalPrice: () => calculateTotalPrice() }}>*/}
                <TotalPrice price={calculateTotalPrice}/>
            {/*</priceNumber.Provider>*/}
        </div>
    );
};

export default App;