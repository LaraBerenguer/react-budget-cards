import React from "react";
import { useState, useContext } from "react";
import Card from './components/Card.tsx';
import services from './data.tsx';

const cardContent = React.createContext<number | null>(null);

const App = () => {
    const [isChecked, setIsChecked] = React.useState<boolean>(false);

    function handleCheck(): void {
        setIsChecked(!isChecked);
    };


    /*let firstCard: Data = services[0];
    let secondCard: Data = services[1];
    let thirdCard: Data = services[2];*/

    return (

        <div className="Container">
            {services.map(service => (
              <cardContent.Provider value={services.id} key={services.id} description={services.description} isChecked={isChecked} handleCheck={handleCheck}>
                <Card />
            </cardContent.Provider>  
            ))}           

        </div>

    );
};

export default App;