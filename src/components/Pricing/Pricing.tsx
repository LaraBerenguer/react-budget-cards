import React from "react";

import Card from '../Card/Card.tsx';
import Header from '../Header/Header.tsx';
//import Data from '../../data.tsx';
import services from '../../data.tsx';

import TotalPrice from "../TotalPrice/TotalPrice.tsx";
import Form from "../Form/Form.tsx";

//Interfaces

interface CardProps {
    description: string;
    title: string;
    price: number;
    key: number;
    isChecked: boolean;
    handleCheck: () => void;
};

export interface WebOptionsProps {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    lang: number;
    setLang: React.Dispatch<React.SetStateAction<number>>;
}

export interface Data {
    id: number,
    name: string,
    description: string,
    price: number
};


export interface TotalPriceProps {
    price: () => number;
}

export interface ClientProps {
    data: Data[],    
    isChecked: boolean[],
    price: () => number;
    page: number;
    lang: number;
}

//Context + values for null

export const webOptionsContent = React.createContext<WebOptionsProps>({
    page: 0,
    setPage: () => { },
    lang: 0,
    setLang: () => { },
});

export const cardContent = React.createContext<CardProps>({
    description: "",
    title: "",
    price: 0,
    key: 0,
    isChecked: false,
    handleCheck: () => { },
});

export const clientContent = React.createContext<ClientProps>({
    data: [],
    isChecked: [],
    price: () => 0,
    page: 0,
    lang: 0
});

//Pricing App

const Pricing = () => {
    const [checkedState, setCheckedState] = React.useState<boolean[]>(Array(services.length).fill(false));

    //Web Card Options State

    const [page, setPage] = React.useState<number>(0);
    const [lang, setLang] = React.useState<number>(0);

    //Functions

    function calculateExtrasPrice() {
        return (page + lang) * 30;
    }

    function calculateTotalPrice() {
        let totalPrice = services.reduce((total, service, index) => {
            return checkedState[index] ? total + service.price : total;
        }, 0);

        return totalPrice + calculateExtrasPrice();
    }

    function handleCheck(index: number) {
        let newChecked = [...checkedState];
        newChecked[index] = !newChecked[index];
        setCheckedState(newChecked);
    };
    
    return (

        <div className="pricingContainer p-5 sm:p-8">
            <Header />
            {services.map((service, index) => (
                <>
                    <cardContent.Provider key={service.id} value={{ description: service.description, title: service.name, price: service.price, key: service.id, isChecked: checkedState[index], handleCheck: () => handleCheck(index) }}>
                        <webOptionsContent.Provider key={service.id} value={{ page: page, setPage: setPage, lang: lang, setLang: setLang }}>
                            <Card />
                        </webOptionsContent.Provider>
                    </cardContent.Provider>
                </>
            ))}
            <TotalPrice price={calculateTotalPrice} />
            <clientContent.Provider value={{ data: services, isChecked: checkedState, price: calculateTotalPrice, page: page, lang: lang }}>
                <Form />
            </clientContent.Provider>
        </div>
    );
};

export default Pricing;