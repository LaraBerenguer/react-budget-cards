//import "./form.css";
import React, { useEffect, useState } from "react";
import ClientCard from "../ClientCard/ClientCard";
import { clientContent } from "../Pricing/Pricing";
import { useContext } from "react";
import Filters from "../Filters/Filters";

//Interfaces

interface ClientData {
    name: string;
    phone: string;
    email: string;
};

export interface FinalData {
    name: string;
    phone: string;
    email: string;
    services: { name: string, id: number }[];
    page?: number;
    lang?: number;
    price: number;
    date: Date;
}

export interface FilterProps {
    list: FinalData[];
    setBudgetList: React.Dispatch<React.SetStateAction<FinalData[]>>
}

//Form

export default function Form() {

    //States

    const [clientData, setClientData] = React.useState<ClientData>({
        name: "",
        phone: "",
        email: ""
    });

    const [isVisible, setIsVibible] = React.useState(false);

    const [budgetList, setBudgetList] = useState<FinalData[]>([]);
    const [unorderedList, setUnorderedList] = useState<FinalData[]>([]);

    //Get context

    let dataContext = useContext(clientContent);
    let { data, isChecked, price, page, lang } = dataContext;

    //Handle Form

    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setClientData({ ...clientData, [name]: value, })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>,) => {
        e.preventDefault();
        setIsVibible(isVisible ? isVisible : !isVisible);
        const checkedExtras = checkedServices();

        let finalClientData: FinalData = {
            name: clientData.name,
            phone: clientData.phone,
            email: clientData.email,
            services: checkedExtras,
            price: price(),
            lang: lang,
            page: page,
            date: new Date(),
        };

        console.log("Budget List: 1", budgetList);
        console.log(finalClientData);
        setBudgetList(prevList => [...prevList, finalClientData]);
        setUnorderedList(prevList => [...prevList, finalClientData]);
        console.log("Budget List: 2", budgetList);
        
        
    }

    useEffect(() => {
        console.log("Updated Budget List:", budgetList);
    }, [budgetList]);
    
    //Functions

    function checkedServices() {

        let checkedList = [];
        {
            for (let i = 0; i < isChecked.length; i++) {
                if (isChecked[i]) {
                    checkedList.push({ name: data[i].name, id: data[i].id });
                }
            }
        }

        return checkedList;
    };

    return (
        <div>
            <div className="finalEstimationContainer bg-white rounded-lg shadow-lg mx-auto my-5 max-w-2xl w-9/10 p-4">
                <div className="formAllObjects w-full">
                    <div className='clientForm flex'>
                        <form onSubmit={handleSubmit} className="flex flex-wrap sm:flex-nowrap gap-3 w-full">
                            <label className="flex items-center gap-2 grow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-pink focus:outline-none"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    value={clientData.name}
                                    onChange={handleForm}
                                    id="clientName"
                                />
                            </label>
                            <label className="flex items-center gap-2 grow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-pink focus:outline-none"
                                    name="phone"
                                    type="text"
                                    placeholder="Phone"
                                    value={clientData.phone}
                                    onChange={handleForm}
                                    id="clientPhone"
                                />
                            </label>
                            <label className="flex items-center gap-2 grow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-custom-pink focus:outline-none"
                                    name="email"
                                    type="email"
                                    placeholder="Mail"
                                    value={clientData.email}
                                    onChange={handleForm}
                                    id="clientMail"
                                />
                            </label>                        
                            <button type="submit"
                                className="relative inline-flex items-center justify-center px-4 py-1.5 border border-custom-purple text-custom-purple bg-transparent font-medium text-sm rounded-md transition-all duration-200 ease-in-out whitespace-nowrap hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-500 sm:w-auto w-full">
                                Request price</button>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <div className="formFilters mb-4">
                    <Filters list={budgetList} unorderedList={unorderedList} setBudgetList={setBudgetList}  />
                </div>
            </div>
            <div className="estimationsContainer">
                {budgetList.map((item, index) => (<ClientCard key={index} finalData={item}/>))}
            </div>
        </div>
    )
};