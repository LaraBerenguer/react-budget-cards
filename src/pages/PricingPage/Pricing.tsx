import React, { useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import Card from '../../components/Card/Card.tsx';
import Header from '../../components/Header/Header.tsx';
import services from '../../data/staticDataService.tsx';
import TotalPrice from "../../components/TotalPrice/TotalPrice.tsx";
import Form from "../../components/Form/Form.tsx";
import { discountContent, cardContent, webOptionsContent, clientContent } from "../../context/context.tsx";

const Pricing = () => {    
    
    const [checkedState, setCheckedState] = React.useState<boolean[]>(Array(services.length).fill(false)); 
    const [page, setPage] = React.useState<number>(0);
    const [lang, setLang] = React.useState<number>(0);
    const [discount, setDiscount] = React.useState<boolean>(false);

    const navigate = useNavigate();
    const location = useLocation();

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

    //URL reading

    useEffect(() => {
        const parameters = new URLSearchParams(location.search);
        const page = parseInt(parameters.get("page") || "0");
        const lang = parseInt(parameters.get("lang") || "0");
        const discount = parameters.get("discount") === "true";
        const checkedState = services.map(service => parameters.get(service.name) === "true");
        
        setPage(page);
        setLang(lang);
        setDiscount(discount);
        setCheckedState(checkedState);   
    }, [location.search]);

    //URL update

    function updateUrl() {
        const parameters = new URLSearchParams();
        if (page !== 0) {parameters.set("page", page.toString())};
        if (lang !==0) {parameters.set("lang", lang.toString())};
        if (discount) {parameters.set("discount", discount.toString())};
        services.forEach((service, index) => {if (checkedState[index]) {parameters.set(service.name, checkedState[index].toString())}});

        navigate({search: parameters.toString()});   
    }

    useEffect(() => {updateUrl();}, [page, lang, discount, checkedState]);

    return (

        <div className="pricingContainer p-5 sm:p-8">
            <discountContent.Provider value={{ discount: discount, toggle: handleToggle }}>
                <Header />
                {services.map((service, index) => (
                    <cardContent.Provider key={service.id} value={{ description: service.description, title: service.name, price: service.price, key: service.id, isChecked: checkedState[index], handleCheck: () => handleCheck(index), isDiscount: discount }}>
                        <webOptionsContent.Provider key={service.id} value={{ page: page, setPage: setPage, lang: lang, setLang: setLang }}>
                            <Card />
                        </webOptionsContent.Provider>
                    </cardContent.Provider>
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