import "./form.css";
import React from "react";
import ClientCard from "../ClientCard/ClientCard";

//Interface

interface ClientData {
    name: string;
    phone: string;
    email: string;
};

//Context

export const ClientDataProps = React.createContext<ClientData>({
    name: "",
    phone: "",
    email: "",
});

export default function Form() {

    //States

    const [clientData, setClientData] = React.useState<ClientData>({
        name: "",
        phone: "",
        email: ""
    });

    const [isVisible, setIsVibible] = React.useState(false)

    function handleForm(e: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = e.target;
        setClientData({...clientData, [name]: value,})
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsVibible(!isVisible);
    }

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
                <ClientDataProps.Provider value={{ name: clientData.name, phone: clientData.phone, email: clientData.email }}>
                    {isVisible && (<ClientCard />)}
                </ClientDataProps.Provider>                
            </div>
        </div>
    )
};