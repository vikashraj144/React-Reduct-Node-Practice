import React from "react";
import {NavLink} from 'react-router-dom';

class Practice extends React.Component{

    render(){
        return(
            <div>
                Practice
                <ol>
                <li><NavLink to="/lifeCycle">Life Cycle</NavLink></li>

                </ol>
            </div>
        )
    }
}

export default Practice;