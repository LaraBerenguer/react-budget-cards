import './headerStyles.css';
import { Link } from "react-router-dom";
import { discountContent } from '../Pricing/Pricing';
import { useContext } from 'react';

const Header: React.FC = () => {
    const { discount, toggle } = useContext(discountContent);

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
            <div className='toggleButton'>                
                <label className="label cursor-pointer flex justify-center gap-3">
                    <span className={`label-text ${discount ? 'text-gray-500' : 'text-white'}`}>Monthly</span>                    
                    <input type="checkbox" className="toggle toggle-secondary" checked={discount} onChange={toggle} />
                    <span className={`label-text ${!discount ? 'text-gray-500' : 'text-custom-pink'}`}>Anual</span>
                </label>                
            </div>
        </div>
    )
};

export default Header;

