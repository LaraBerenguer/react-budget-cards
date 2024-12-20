import React from "react";
import "./totalPrice.css";

export interface TotalPriceProps {
    price: () => number;
    isDiscount: boolean;
    calculateDiscount: () => number;
}

const TotalPrice: React.FC<TotalPriceProps> = ({ price, isDiscount, calculateDiscount }) => {
    return (
        <div className='priceContainer text-right p-5 bg-transparent rounded-lg my-5 mx-auto max-w-screen-sm w-11/12 sm:p-4'>
            <div className='priceTextContainer mb-3'>
                <div className='priceText'>
                    <h2 className="totalPrice text-white text-3xl m-0 sm:text-3xl">Total price:</h2>
                </div>
            </div>
            <div className="priceNumberContainer flex justify-end items-center gap-2">
                <div className="priceNumber">
                    <h2 className="price text-white text-4xl m-0 sm:text-4xl">{ isDiscount ? calculateDiscount() : price()}</h2>
                </div>
                <div className="priceTag">
                    <p className="text-white text-xl m-0 font-bold sm:text-lg">€</p>
                </div>
            </div>
        </div>
    )
};

export default TotalPrice;