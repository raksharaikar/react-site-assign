import React from 'react';
import './Button.css';

import { Link } from 'react-router-dom';

function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'><img src="/images/chat.png" width="15" />Get In Touch</button>
    </Link>
  );
}

export default Button;