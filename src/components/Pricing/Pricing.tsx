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
    isDiscount: boolean;
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
    isDiscount: boolean;
    calculateDiscount: () => number;
}

export interface ClientProps {
    data: Data[],
    isChecked: boolean[],
    price: () => number;
    page: number;
    lang: number;
    isDiscount: boolean;
    calculateDiscount: () => number;
}

export interface discountProps {
    discount: boolean;    
    toggle: () => void;
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
    isDiscount: false,
});

export const clientContent = React.createContext<ClientProps>({
    data: [],
    isChecked: [],
    price: () => 0,
    page: 0,
    lang: 0,
    isDiscount: false,
    calculateDiscount: () => 0,
});

export const discountContent = React.createContext<discountProps>({
    discount: false,
    toggle: () => { },
});

//Pricing App

const Pricing = () => {
    const [checkedState, setCheckedState] = React.useState<boolean[]>(Array(services.length).fill(false));

    //Web Card Options State

    const [page, setPage] = React.useState<number>(0);
    const [lang, setLang] = React.useState<number>(0);

    //Discount Toggle State

    const [discount, setDiscount] = React.useState<boolean>(false);

    //Functions

    function calculateDiscount() {
        return calculateTotalPrice() * 0.8;
    }

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

    function handleToggle() {
        setDiscount(!discount);
    };

    return (

        <div className="pricingContainer p-5 sm:p-8">
            <discountContent.Provider value={{ discount: discount, toggle: handleToggle }}>
                <Header />
                {services.map((service, index) => (
                    <>
                        <cardContent.Provider key={service.id} value={{ description: service.description, title: service.name, price: service.price, key: service.id, isChecked: checkedState[index], handleCheck: () => handleCheck(index), isDiscount: discount }}>
                            <webOptionsContent.Provider key={service.id} value={{ page: page, setPage: setPage, lang: lang, setLang: setLang }}>
                                <Card />
                            </webOptionsContent.Provider>
                        </cardContent.Provider>
                    </>
                ))}
                <TotalPrice price={calculateTotalPrice} isDiscount={discount} calculateDiscount={calculateDiscount}  />
                <clientContent.Provider value={{ data: services, isChecked: checkedState, price: calculateTotalPrice, page: page, lang: lang, isDiscount: discount, calculateDiscount: calculateDiscount }}>
                    <Form />
                </clientContent.Provider>
            </discountContent.Provider>
        </div>
    );
};

export default Pricing;