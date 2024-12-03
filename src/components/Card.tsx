import { useContext } from 'react';
import { cardContent } from '../App';
import './cardStyles.css';


export default function Card() {

    let context = useContext(cardContent);
    let { id, description, isChecked, handleCheck, title, price } = context;

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
                    id={`${id}`}
                    checked={isChecked}
                    onChange={handleCheck}
                />
                <p>Select</p>
            </div>
        </div>
    )
}