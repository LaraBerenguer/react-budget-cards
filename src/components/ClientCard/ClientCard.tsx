import { useState, useEffect } from "react";
import {FinalData} from "../Form/Form";
import "./clientCard.css";

//Interface

interface ClientCardProps {
    finalData: FinalData;
}

export default function ClientCard({ finalData }: ClientCardProps ) {

    const [budget, setBudget] = useState<FinalData>({
        name: "",
        phone: "",
        email: "",
        services: [],
        price: 0
    });

    useEffect(() => {setBudget(finalData)}, []);

    const servicesList = budget.services.map((service) => service.name).join(", ");    

    return (
        <div className="clientCardsContainer">
            <div className='clientInfoContainer'>
                <h2 className='clientName'>{budget.name}</h2>
                <p className='clientPhone'>{budget.phone}</p>
                <p className='clientMail'>{budget.email}</p>
            </div>
            <div className='clientServicesContainer'>
                <p>Services:</p>
                <p className='servicesList'>{servicesList}</p>
                {budget.services.some(service => service.id === 3) && (<p>({budget.page} pages, {budget.lang} languages)</p>)}
            </div>
            <div className="clientPriceContainer">
                <div className="priceText">
                    <p>Total:</p>
                </div>
                <div className="priceNumber">
                    <h2>{budget.price}</h2>
                </div>
                <div className="priceTag">
                    <p>€</p>
                </div>
            </div>
        </div>
    )
}

//state para cada parámetro
//state del objeto entero final pero para eso lo paso desde form ya hecho
//hacer el map en pricing?? haciendo que clientcard no sea hijo de form sino de pricing
//no sé