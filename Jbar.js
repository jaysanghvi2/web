import { Jbutton } from '../Jbutton';
import React ,{ useState} from 'react'
import { Link } from 'react-router-dom'

function Jbar() {

    const[click, setClick] = useState(false);
    const[button,setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
         setButton(false);
         } else {
             setButton(true);
         } 
    };

    window.addEventListener('resize', showButton);
    
    return (
        <>

            <nav className='navbar'>
                <div className='navbar-container' >
                 <Link to='/' className='navbar-logo'>Shiv
                 <i className='fab fa-typo3' />
                 </Link>
                <div className='menu-icon' onClick={handleClick}>
               <i className={click ? 'fa-solid fa-bars' : 'fa-solid fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item'>
                   <Link  to='/' className='nav-links' onClick={closeMobileMenu}>
                       Home
                   </Link>
                 </li>
                 <li className='nav-item'>
                   <Link  to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                       Gallery
                   </Link>
                 </li>
                 <li className='nav-item'>
                   <Link  to='/about' className='nav-links' onClick={closeMobileMenu}>
                    About
                   </Link>
                 </li>
                 <li className='nav-item'>
                   <Link  to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                       Sign Up
                   </Link>
                 </li>
                </ul> 
                {button && <Jbutton buttonStyle='btn--outline' >SIGN UP</Jbutton>}
                </div>
            </nav>

            
        </>
    )
}

export default Jbar


