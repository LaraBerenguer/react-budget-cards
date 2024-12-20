import React from "react";
import { CardProps } from "../components/Card/Card";


export const cardContent = React.createContext<CardProps>({
    description: "",
    title: "",
    price: 0,
    key: 0,
    isChecked: false,
    handleCheck: () => { },
    isDiscount: false,
});
