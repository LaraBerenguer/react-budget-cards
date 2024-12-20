import { useState, useEffect } from "react";
import { FinalData } from "../../interfaces/FinalData";

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

    useEffect(() => { setBudget({ ...finalData }) }, [finalData]);
    
    return (
        <div className="clientCardsContainer">
            <div className="filtersAndClient">
                <div className="clientContainer flex flex-row bg-white rounded-lg shadow-lg mx-auto my-5 max-w-2xl w-9/10 py-4 px-10 m-4 text-center items-start justify-around">
                    <div className='clientInfoContainer text-left w-2/5'>
                        <h3 className='clientName text-xl font-semibold'>{budget.name}</h3>
                        <p className='clientMail text-sm text-custom-gray'>{budget.email}</p>
                        <p className='clientPhone text-sm text-custom-gray'>{budget.phone}</p>
                    </div>
                    <div className='clientServicesContainer text-left text-sm w-1/5'>
                        <p className="font-semibold">Services:</p>
                        <ul className='servicesList list-disc'>{budget.services.map(service => (
                            <li className="flex flex-col" key={service.name}>
                                <span className="flex flex-row items-center gap-1">
                                    <span className="custom-pink-dot w-1 h-1 bg-pink-500 rounded-full inline-block"></span>
                                    {service.name}
                                </span>
                                <span className="text-xs">
                                    {service.id === 3 && (
                                        <ul>
                                            {budget.page !== 0 && <li>- {budget.page} pages</li>}
                                            {budget.lang !== 0 && <li>- {budget.lang} languages</li>}                                            
                                        </ul>
                                    )}
                                </span>

                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="clientPriceContainer text-right w-1/5 items-end text-custom-purple">
                        <div className="priceText text-sm">
                            <p>Total:</p>
                        </div>
                        <div className="allPrice flex flex-row gap-0.5 items-center justify-end">
                            <div className="priceNumber text-3xl font-bold">
                                <h2>{budget.price}</h2>
                            </div>
                            <div className="priceTag">
                                <p>€</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}