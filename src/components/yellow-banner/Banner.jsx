import { FaMapMarkerAlt, FaEnvelope, FaFacebook, FaPinterest, FaTwitter, FaInstagram } from 'react-icons/fa';
import './banner.css';

export const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner-row'>
                    <div className='banner-col'>
                        <div className='banner-text'>
                            <span><FaMapMarkerAlt /></span>
                            <span>9ijakids Lane, Lagos</span>
                        </div>
                    </div>
                    <div className='banner-col'>
                        <div className='banner-text'>
                            <span><FaEnvelope /></span>
                            <span>9ijakids@test.com</span>
                        </div>
                    </div>
                    <div className='banner-col'>
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
        </div>
    );
};