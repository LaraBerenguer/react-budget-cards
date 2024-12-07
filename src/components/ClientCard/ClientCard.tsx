import { useContext, useState } from "react";
import { clientContent } from "../Pricing/Pricing";
import { ClientDataProps } from "../Form/Form";
import "./clientCard.css";

export default function ClientCard() {

    //Handling checked services

    let clientContext = useContext(clientContent);
    let { data, isChecked, price, page, lang } = clientContext;

    function checkedServices() {

        let checkedList = [];
        {
            for (let i = 0; i < isChecked.length; i++) {
                if (isChecked[i]) {
                    checkedList.push({name: data[i].name, id: data[i].id});
                }
            }
        }

        return checkedList;
    };

    //Handling form values

    let dataContext = useContext(ClientDataProps);
    let { name, phone, email } = dataContext;   
    
    //Handling all info

    const [allInfo, setAllInfo] = useState({})


    return (
        <div className="clientCardsContainer">
            <div className='clientInfoContainer'>
                <h2 className='clientName'>{name}</h2>
                <p className='clientPhone'>{phone}</p>
                <p className='clientMail'>{email}</p>
            </div>
            <div className='clientServicesContainer'>
                <p>Services:</p>
                <p className='servicesList'>{checkedServices().map(service => service.name).join("\n")}</p>
                {checkedServices().some(service => service.id === 3) && (<p>({page} pages, {lang} languages)</p>)}
            </div>
            <div className="clientPriceContainer">
                <div className="priceText">
                    <p>Total:</p>
                </div>
                <div className="priceNumber">
                    <h2>{price()}</h2>
                </div>
                <div className="priceTag">
                    <p>€</p>
                </div>
            </div>
        </div>
    )
}
