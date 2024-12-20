import React from "react";
import { ClientProps } from "../components/Form/Form";


export const clientContent = React.createContext<ClientProps>({
    data: [],
    isChecked: [],
    price: () => 0,
    page: 0,
    lang: 0,
    isDiscount: false,
    calculateDiscount: () => 0,
});
