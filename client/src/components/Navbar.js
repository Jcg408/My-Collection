import React from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
        <div className="navbar">
            
                <ul>
                    <li><NavLink to="/"> Home</NavLink></li>
                    <li><NavLink to="/boxes"> Inventory</NavLink></li>
                    <li><NavLink to="/box/new">Add New Item</NavLink></li>
                    <li><NavLink to="/info">Information / Resources</NavLink></li>
                </ul>
           
        
    </div>
    )
    
}
 export default Navbar;