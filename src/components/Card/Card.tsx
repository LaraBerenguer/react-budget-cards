import { useContext } from 'react';
import { cardContent } from '../Pricing/Pricing';
import WebOptions from "../WebOptions/WebOptions";
import './cardStyles.css';


export default function Card() {

    let context = useContext(cardContent);
    let { key, description, isChecked, handleCheck, title, price } = context;

    return (
        <div>
            <div className={`Card bg-white rounded-lg shadow-lg mx-auto my-5 max-w-2xl w-9/10 px-7 py-8 flex items-center ${isChecked ? 'ring-4 ring-custom-pink' : ''}`}>
                
                <div className='CardTextContainer text-left flex-1 pr-4'>
                    <h2 className='CardTitle text-2xl font-semibold text-ligh-gray'>{title}</h2>
                    <p className='CardDescription text-custom-gray text-base '>{description}</p>
                </div>
                <div className="CardRigthContainer flex flex-row justify-between gap-8">
                    <div className='CardPriceContainer flex items-center'>
                        <p className='CardPrice text-2xl font-bold text-custom-purple'>{price}</p>
                        <p className='text-lg text-custom-purple'>€</p>
                    </div>
                    <div className='CardInputContainer flex justify-center items-center'>
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
                    <div className='optionsHere flex-wrap items-center animate-fadeIn'>
                        <WebOptions />
                    </div>
                )}
            </div>
        </div>
    )
}