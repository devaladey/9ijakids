import './button.css';
export const Button = ({children, size, styles})=> {
    return ( 
        <button className='btn' style={styles}>{children}</button>
     );
};