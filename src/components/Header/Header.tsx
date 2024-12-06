import './headerStyles.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className='allContainer'>
            <div className='navContainer'>                
                <div className='logoContainer'>
                <img src="/images/logo.png" alt="Frontender.itacademy" />
                </div>
                <div className='welcomeBtnContainer'>
                <Link to="/">Go back to Instructions</Link> 
                </div>
            </div>
            <div className='headerContainer'>
                <div className='headerText'>
                    <h1>Consigue la mejor calidad</h1>
                </div>
            </div>
        </div>
    )
};

