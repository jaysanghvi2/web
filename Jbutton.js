import React from 'react';
import 'E:/reactJs/website/src/Button.css' 
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Jbutton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
 }) => {
    const chackButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle
      : STYLES[0];
     
const chackButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
        
return(
       <Link to='/sign-up' className='btn-mobile'>
           <Jbutton
           className={`btn ${chackButtonStyle} ${chackButtonSize}`}
           onClick={onClick}
           type={type}
           >
                {children}
           </Jbutton>
       </Link>
        )   
    };

    export default Jbutton;
