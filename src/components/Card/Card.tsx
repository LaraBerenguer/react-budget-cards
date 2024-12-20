import { useContext } from 'react';
import { cardContent } from "../../context/context";
import WebOptions from "../WebOptions/WebOptions";
import './cardStyles.css';

export interface CardProps {
    description: string;
    title: string;
    price: number;
    key: number;
    isChecked: boolean;
    handleCheck: () => void;
    isDiscount: boolean;
};


export default function Card() {

    let context = useContext(cardContent);
    let { key, description, isChecked, handleCheck, title, price, isDiscount } = context;

    return (
        <div>
            <div className={`Card bg-white rounded-lg shadow-lg mx-auto my-5 max-w-2xl w-9/10 px-7 py-8 flex items-center ${isChecked ? 'ring-4 ring-custom-pink' : ''}`}>

                <div className='CardTextContainer text-left flex-1 pr-4'>
                    <h2 className='CardTitle text-2xl font-semibold text-ligh-gray'>{title}</h2>
                    <p className='CardDescription text-custom-gray text-base '>{description}</p>
                </div>
                <div className="CardRigthContainer flex flex-row justify-between gap-8">
                    <div className='CardPriceContainer flex items-center flex-col'>
                        {isDiscount && <span className='discountText text-custom-pink text-sm'>Save 20% off!</span>}
                        <div className='text flex flex-row items-center'>
                            <p className='CardPrice text-2xl font-bold text-custom-purple'>
                                {isDiscount ? <><small><del>{price}</del></small> {price * 0.8}</> : price}
                            </p>
                            <p className='tag text-lg text-custom-purple'>€</p>
                        </div>

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