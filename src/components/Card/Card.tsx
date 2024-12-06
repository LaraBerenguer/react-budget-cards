import { useContext } from 'react';
import { cardContent } from '../Pricing/Pricing';
import WebOptions from "../WebOptions/WebOptions";
import './cardStyles.css';


export default function Card() {

    let context = useContext(cardContent);
    let { key, description, isChecked, handleCheck, title, price } = context;

    return (
        <div className="Card">
            <div className='CardTextContainer'>
                <h2 className='CardTitle'>{title}</h2>
                <p className='CardDescription'>{description}</p>
            </div>
            <div className='CardPriceContainer'>
                <p className='CardPrice'>{price}</p>
                <p>€</p>
            </div>
            <div className='CardInputContainer'>
                <input
                    type="checkbox"
                    id={`${key}`}
                    checked={isChecked}
                    onChange={handleCheck}
                />
                <p>Select</p>
            </div>
            {key === 3 && isChecked && (
                <div className='webOptionsContainer'>
                    <WebOptions />
                </div>
            )}
        </div>
    )
}