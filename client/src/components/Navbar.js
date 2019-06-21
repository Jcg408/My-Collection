import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <div className="Navigation">
        <ul>
            <li><NavLink to="/boxes">Russian Lacquer Boxes</NavLink></li>
            <li><NavLink to="/box/new">Add / Delete Box</NavLink></li>
            <li><NavLink to="/info">Information / Resources</NavLink></li>
        </ul>
    </div>
    )
    
}
 export default Navbar;