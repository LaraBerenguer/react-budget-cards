import React from "react";
import { WebOptionsProps } from "../components/WebOptions/WebOptions";
import { CardProps } from "../components/Card/Card";
import { ClientProps } from "../components/Form/Form";
import {discountProps } from "../components/Form/Form";

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
