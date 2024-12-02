import React, {useContext, useState} from 'react';
import {CardContext} from '../App';
import './cardStyles.css';

let cardProps = useContext(cardContent)


export default function Card() {

    return (
        <div className="Card">
            <input
            type="checkbox"
            id={cardProps.id}
            checked={cardProps.isChecked}
            onChange={handleCheck}                
            />
            <p>{cardProps.description}</p>
        </div>
    )
}