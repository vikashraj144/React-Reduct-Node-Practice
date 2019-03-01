import React from 'react';
import {Link} from "react-router-dom";

// funcion component 
// passing props
const Footer = (props) => {
    return (
        <footer>
            <p>Posted by: vikask</p>
            <p>Contact information: <a href="mailto:vikashraj144@gmail.com">
            email here</a>.</p>
        </footer>
    );
};

export default Footer;