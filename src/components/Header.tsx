import './headerStyles.css';

export default function Header() {
    return (
        <div className='allContainer'>
            <div className='logoContainer'>
                <div>
                <img src="/images/logo.png" alt="Frontender.itacademy" />
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

