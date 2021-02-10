import React, { useState } from 'react';
import  Button  from '../Button/Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

import NavItems from './NavItems';

function Navbar() {
 
    const [click, setClick] = useState(false);
   
  
    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);
  
   

  return (
    <>
      <nav className='navbar'>
        <div style={{width:'100%', textAlign:'center'}}>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <img src="/images/COMPANY LOGO.png" />
        </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>


        <NavItems clicked={click} closemenu={closeMobileMenu}/>

        
        <Button />

        <div class="chat-mobile">
        <img src="/images/chat.png" width="20" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;