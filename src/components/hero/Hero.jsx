import { Button } from '../button/Button';
import {Timer, TopBanner} from '../../img';
import './hero.css';
export const Hero = ()=> {
    return ( 
        <header className="hero">
            <div className="container">
                <div className="hero-row">
                    <div className="hero-col">
                        <div className="hero-col-text">
                            <p className="hero-para">Learning is Fun</p>
                            <h1 className="hero-title">Learn New Skills Online Find Best Courses</h1>
                            <div className="hero-btns">
                                <Button>Register</Button>
                                <Button>Login</Button>
                            </div>
                        </div>
                    </div>
                    <div className="hero-col">
                        <div className="hero-col-img">
                            <img src={TopBanner} alt="Top Banner" />
                        </div>
                    </div>
                </div>
                <div className="hero-banner">
                    <div className="hero-banner-img">
                    <img src={Timer} alt="Timer" />
                    </div>
                </div>
            </div>
        </header>
     );
};