import "./form.css";
import React, { useState } from "react";
import ClientCard from "../ClientCard/ClientCard";
import { clientContent } from "../Pricing/Pricing";
import { useContext } from "react";

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

    //Get context

    let dataContext = useContext(clientContent);
    let { data, isChecked, price, page, lang } = dataContext;

    //Handle Form

    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setClientData({ ...clientData, [name]: value, })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>, ) => {
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
            page: page
        };

        setBudgetList([...budgetList, finalClientData]);
        console.log("Budget List: ", budgetList);
    }

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
        <div className="finalEstimationContainer">
            <div className='clientForm'>
                <form onSubmit={handleSubmit}>
                    <label className="labelForm">
                        <input required
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={clientData.name}
                            onChange={handleForm}
                            id="clientName"
                        />
                        <input required
                            name="phone"
                            type="text"
                            placeholder="Phone"
                            value={clientData.phone}
                            onChange={handleForm}
                            id="clientPhone"
                        />
                        <input required
                            name="email"
                            type="email"
                            placeholder="Mail"
                            value={clientData.email}
                            onChange={handleForm}
                            id="clientMail"
                        />
                    </label>
                    <button type="submit">Request Estimation</button>
                </form>
            </div>
            <div className="estimationsContainer">
                {isVisible && budgetList.map( (item, index)=> (<ClientCard key={index} finalData={item} />))}
            </div>
        </div>
    )
};


//Buscar el orden en el que ocurren las cosas en form, sobre todo con dataContext, que parece que no lo uso??? Lo paso como prop pero no hace nada aquí en budgetList
//Es posible que setBudgetList tenga que moverlo a client o budget a Form para que lo hagan a la vez?
//VISIBLE TRUE