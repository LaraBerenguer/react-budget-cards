import { useContext } from 'react';
import { cardContent } from '../Pricing/Pricing';
import WebOptions from "../WebOptions/WebOptions";
import './cardStyles.css';


export default function Card() {

    let context = useContext(cardContent);
    let { key, description, isChecked, handleCheck, title, price } = context;

    return (
        <div>
            <div className="Card bg-white rounded-lg shadow-lg mx-auto my-5 max-w-2xl w-9/10 flex">
                
                <div className='CardTextContainer text-left flex-1 pr-4'>
                    <h2 className='CardTitle text-2xl font-semibold text-ligh-gray'>{title}</h2>
                    <p className='CardDescription text-custom-gray text-base mb-4'>{description}</p>
                </div>
                <div className="CardRigthContainer flex flex-row justify-between gap-8">
                    <div className='CardPriceContainer flex items-center mb-4'>
                        <p className='CardPrice text-xl font-bold text-custom-purple'>{price}</p>
                        <p className='text-lg text-custom-purple'>€</p>
                    </div>
                    <div className='CardInputContainer flex justify-center items-center mb-4'>
                        <input
                            type="checkbox"
                            id={`${key}`}
                            checked={isChecked}
                            onChange={handleCheck}
                            className='form-checkbox text-custom-purple accent-custom-purple h-5 w-5 mr-2'
                        />
                        <p className='text-sm font-medium text-custom-purple'>Select</p>
                    </div>
                </div>
            </div>
            <div>
                {key === 3 && isChecked && (
                    <div className='webOptionsContainer'>
                        <WebOptions />
                    </div>
                )}
            </div>
        </div>
    )
}