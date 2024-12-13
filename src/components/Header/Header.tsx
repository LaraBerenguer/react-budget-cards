import './headerStyles.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className='allContainer py-5 mx-auto mt-5 max-w-2xl w-9/10'>
            <div className='navContainer flex justify-between items-center'>
                <div className='logoContainer text-white p-5 flex flex-row'>
                    <img className="imgLogo" src="././src/assets/img/sparkle.png" alt="Frontender.itacademy" />                    
                    <Link to="/" className='text-white hover:text-custom-purple'> Frontender.itacademy</Link>
                </div>                
            </div>
            <div className='headerContainer text-center p-10 bg-transparent rounded-lg  mx-auto'>
                <div className='headerText'>
                    <h1 className='text-7xl text-white'>Get the best quality</h1>
                </div>
            </div>
        </div>
    )
};

