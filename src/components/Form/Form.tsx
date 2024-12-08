import "./form.css";
import React from "react";
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

    //Get context

    let dataContext = useContext(clientContent);
    let { data, isChecked, price, page, lang } = dataContext;

    //Handle Form

    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setClientData({ ...clientData, [name]: value, })
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsVibible(!isVisible);
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

    //const checkedExtras = data.filter((_, index) => isChecked[index]).map(service => ({ name: service.name, id: service.id }));
    const checkedExtras = checkedServices();

    let finalClientData: FinalData = {
        name: "",
        phone: "",
        email: "",
        services: [],
        price: 0
    };

    finalClientData.name = clientData.name;
    finalClientData.phone = clientData.phone;
    finalClientData.email = clientData.email;
    finalClientData.services = checkedExtras;
    finalClientData.page = page;
    finalClientData.lang = lang;
    finalClientData.price = price();

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
                {isVisible && (<ClientCard finalData={finalClientData} />)}
            </div>
        </div>
    )
};