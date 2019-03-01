import React from 'react';
import {Link} from "react-router-dom";

// funcion component 
// passing props
const Header = (props) => {
    return (
        <header className='header'>
            <Link to={'/'}>
                {/* <Image src={logo} className={'header-logo'} /> */}
            </Link>

            <div className={'header-text'}>
                {props.subtitle}
            </div>

        </header>
    );
};

export default Header;