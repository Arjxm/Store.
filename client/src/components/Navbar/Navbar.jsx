import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
} from './NavbarElements';
import SearchInput from "./SearchInput";
import CartIcon from "./CartIcon";
import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";
import AddProductForm from "../AddProduct/AddProductForm";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to='/'>
                   <Logo>Store.</Logo>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to='/about' activeStyle>
                        New & Featured
                    </NavLink>
                    <NavLink to='/services' activeStyle>
                        Men
                    </NavLink>
                    <NavLink to='/contact-us' activeStyle>
                        Women
                    </NavLink>
                    <NavLink to='/sign-up' activeStyle>
                        Sale
                    </NavLink>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                <NavBtn>
                    <SearchInput/>
                    <CartIcon/>
                    <AddProductForm/>
                </NavBtn>
            </Nav>
        </>
    );
};

 const Logo = styled(Link)`
     font-size: 32px;
     font-weight: bolder;
     text-decoration: none;
   color: #000000;
`;
 export default Navbar;