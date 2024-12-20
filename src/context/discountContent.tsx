import React from "react";
import { discountProps } from "../components/Form/Form";


export const discountContent = React.createContext<discountProps>({
    discount: false,
    toggle: () => { },
});
