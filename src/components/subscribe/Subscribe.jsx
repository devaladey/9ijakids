import {NewLetter} from '../../img'
import { Form } from '../form/Form';
import './subscribe.css';
export const Subscribe = ()=> {
    return ( 
        <section className="subscribe">
            <div className="container">
                <div className="subscribe-row">
                    <div className="subscribe-col">
                        <div className="subscribe-col-img">
                            <img src={NewLetter} alt="News Letter" />
                        </div>
                    </div>
                    <div className="subscribe-col">
                        <div className="subscribe-col-text">
                            <span>Subscrible now</span>
                            <h3>Be in the know...</h3>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
};