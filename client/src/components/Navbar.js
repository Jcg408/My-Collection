import React from 'react';
import '../css/Navbar.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return(
    <nav className='navbar'>
                <ul>
                    <button><NavLink to="/"> Home</NavLink></button>
                    <button><NavLink to="/boxes"> Inventory</NavLink> </button>
                    <button><NavLink to="/box/new">Add New Item</NavLink> </button>
                    <button><NavLink to="/info">Information / Resources</NavLink> </button>
                    <button><NavLink to="/villages">Russian Villages</NavLink></button>
                </ul>
            </nav>
    )
    
}
 export default Navbar;