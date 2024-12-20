import React from "react";
import { WebOptionsProps } from "../components/WebOptions/WebOptions";


export const webOptionsContent = React.createContext<WebOptionsProps>({
    page: 0,
    setPage: () => { },
    lang: 0,
    setLang: () => { },
});
