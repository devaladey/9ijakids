import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaPinterest, FaTwitter } from 'react-icons/fa';
import { Logo } from '../logo/Logo';
import './footer.css';
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-row">
                    <div className="footer-col">
                        <Logo />
                        <ul className='footer-menu'>
                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    <span><FaMapMarkerAlt /></span>
                                    <span>9ijakids lane</span>
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    <span><FaEnvelope /></span>
                                    <span>9ijakids@test.com</span>
                                </a>
                            </li>
                            <li className="footer-item">
                                <a href="#" className="footer-link">
                                    <span><FaPhone /></span>
                                    <span>phone 9ijakids</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className='menu-heading'>Community</h3>
                        <ul className="text-menu">
                            <li className="text-item">
                                <a href="#" className="text-link">Learners</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Partners</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Developers</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Beta Testers</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Translators</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Blog</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Tech Blog</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Teaching Center</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className="menu-heading">Information</h3>
                        <ul className="text-menu">
                        <li className="text-item">
                            <a href="#" className="text-link">About</a>
                        </li>
                        <li className="text-item">
                            <a href="#" className="text-link">Pricing</a>
                        </li>
                        <li className="text-item">
                            <a href="#" className="text-link">Blog</a>
                        </li>
                        <li className="text-item">
                            <a href="#" className="text-link">Careers</a>
                        </li>
                        <li className="text-item">
                            <a href="#" className="text-link">Contact</a>
                        </li>
                    </ul>
                    </div>
                    <div className="footer-col">
                        <h3 className='menu-heading'>More</h3>
                        <ul className="text-menu">
                            <li className="text-item">
                                <a href="#" className="text-link">Press</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Terms</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Privacy</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Help</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Accessibility</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Contact</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Articles</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Directory</a>
                            </li>
                            <li className="text-item">
                                <a href="#" className="text-link">Affliates</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-inner">
                        <span>test test</span>
                        <ul className='banner-socialmenu'>
                            <li className='banner-social-item'>
                                <a href='' className='banner-social-link'><FaFacebook /></a>
                            </li>
                            <li className='banner-social-item'>
                                <a href='' className='banner-social-link'><FaPinterest /></a>
                            </li>
                            <li className='banner-social-item'>
                                <a href='' className='banner-social-link'><FaTwitter /></a>
                            </li>
                            <li className='banner-social-item'>
                                <a href='' className='banner-social-link'><FaInstagram /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};