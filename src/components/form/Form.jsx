import { FaEnvelope } from 'react-icons/fa';
import { Button } from '../button/Button';
import './form.css';

export const Form = () => {
    return (
        <form  className='form'>
            <div className="form-control">
                <span>
                    <FaEnvelope />
                </span>
                <input type="email" placeholder='Enter email address' className='form-input' />
                <Button>Subscrible now</Button>
            </div>
        </form>
    );
};