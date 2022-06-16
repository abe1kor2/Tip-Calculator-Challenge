import React from 'react';
import logo from '../../assets/logo.svg'
import './Header.css'

function Header(props) {
    
    return (
        <div>
            <div className='logo'>
                <img src={logo} alt='Logo' />
            </div>
        </div>
    );
}

export default Header;