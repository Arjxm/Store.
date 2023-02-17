import React from 'react';
import {Box, Container, TextField} from "@mui/material";
// @ts-ignore
import styled from 'styled-components';

//Icons
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {fontSize} from "@mui/system";
const NavBar = () => (
    <>
    <Container style={{display:'flex', justifyContent:'space-between', alignItems:'center'}} maxWidth={'lg'}>
        <Logo>Store.</Logo>
        <Menu>
            <InputSerach/>
           <AddShoppingCartIcon sx={{fontSize:'40px'}}/>
            <AccountCircleIcon sx={{fontSize:'40px'}}/>
        </Menu>
    </Container>

        <Container>
            <Navigation>
                <NavItems>Collections</NavItems>
                <NavItems>Man</NavItems>
                <NavItems>Woman</NavItems>
                <NavItems>Sale</NavItems>
            </Navigation>
        </Container>
        </>
);
const Logo = styled.span`
  color: #8bff00 !important;
  font-size: 86px;
`;

const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputSerach = styled.input`
  width: 68%;
  background: white !important;
  border: none;
  border-radius: 360px;
  padding: 8px;
  font-size: 18px;
`;

const Navigation = styled.ul`
  border-top: 0.5px solid white;
  border-bottom: 0.5px solid  white;
  padding: 8px;
  list-style: none;
 display: flex;
`;

const NavItems = styled.li`
  margin-left: 24px;
  font-size: 19px;
  cursor: pointer;
`;
export default NavBar;