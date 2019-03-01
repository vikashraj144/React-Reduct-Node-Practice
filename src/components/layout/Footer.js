import React from 'react';
import {Link} from "react-router-dom";

// funcion component 
// passing props
const Footer = (props) => {
    return (
        <footer>
            <p>Posted by: Hege Refsnes</p>
            <p>Contact information: <a href="mailto:someone@example.com">
            someone@example.com</a>.</p>
        </footer>
    );
};

export default Footer;