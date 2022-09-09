import { FaSearch } from 'react-icons/fa';
import { Button } from '../button/Button';
import { Logo } from '../logo/Logo';
import './navbar.css';
export const NavBar = ()=> {
    return ( 
        <nav className='nav'>
            <div className='container'>
                <div className='nav-row'>
                    <div className="nav-logo">
                        <Logo />
                    </div>
                    <div className="nav-menus">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Games</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Competition</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-btns">
                        <Button>Register</Button>
                        <Button color={'#FFFFFF00'}><FaSearch /></Button>
                    </div>
                </div>
            </div>
        </nav>
     );
};