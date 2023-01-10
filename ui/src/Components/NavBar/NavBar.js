import React from 'react';

const NavBar = () => (
    <nav className = "flex justify-between p-6 align-middle border">
        <div>
            <ul className="flex">
                <li className= "ml-2">Shop</li>
                <li className= "ml-2">Blog</li>
                <li className= "ml-2">About</li>
            </ul>
        </div>

        <div>
            <h1>LOGO</h1>
        </div>

        <div>
            <ul className="flex">
                <li className= "mr-2">Search</li>
                <li className= "mr-2">DE | EUR</li>
                <li className= "mr-2">Cart</li>
            </ul>
        </div>
    </nav>
);

export default NavBar;