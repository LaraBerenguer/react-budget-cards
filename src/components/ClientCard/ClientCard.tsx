import { useState, useEffect } from "react";
import { FinalData } from "../Form/Form";

//Interface

interface ClientCardProps {
    finalData: FinalData;
}

export default function ClientCard({ finalData }: ClientCardProps) {

    const [budget, setBudget] = useState<FinalData>({
        name: "",
        phone: "",
        email: "",
        services: [],
        price: 0,
        date: new Date(),
    });

    useEffect(() => { setBudget({...finalData}) }, [finalData]);
    //console.log("Budget: ", budget);

    const servicesList = budget.services.map((service) => service.name).join(", ");



    return (
        <div className="clientCardsContainer">
            <div className="filtersAndClient">                
                <div className="clientContainer flex flex-row bg-white rounded-lg shadow-lg mx-auto my-5 max-w-2xl w-9/10 p-4 m-4 text-center items-center justify-around">
                    <div className='clientInfoContainer text-left'>
                        <h3 className='clientName text-xl font-semibold'>{budget.name}</h3>
                        <p className='clientPhone text-sm text-custom-gray'>{budget.phone}</p>
                        <p className='clientMail text-sm text-custom-gray'>{budget.email}</p>
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
            </div>
        </div>
    )
}