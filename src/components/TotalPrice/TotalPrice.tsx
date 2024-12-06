//import styles
import React from "react";
import {TotalPriceProps} from '../Pricing/Pricing';

const TotalPrice: React.FC<TotalPriceProps> = ({ price }) => {
    return (
        <div className='priceContainer'>
            <div className='priceTextContainer'>
                <div className='priceText'>
                    <h2>Precio presupuestado:</h2>
                </div>
            </div>
            <div className="priceNumberContainer">
                <div className="priceNumber">
                    <h2>{price()}</h2>
                </div>
                <div className="priceTag">
                    <p>€</p>
                </div>
            </div>
        </div>
    )
};

export default TotalPrice;