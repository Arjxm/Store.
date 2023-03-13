import React from 'react';
import styled from 'styled-components';
import {HiOutlineShoppingCart} from "react-icons/all";

const CartContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 24px;
`;


const CountCircle = styled.div`
  background-color: #f00;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  text-align: center;
  width: 20px;
  margin-bottom: 20px;
`;

const CartIcon = ({ itemCount }) => {
    return (
        <CartContainer>
            <HiOutlineShoppingCart style={{fontSize:"24px"}}/>
            <CountCircle>{itemCount}</CountCircle>
        </CartContainer>
    );
};

export default CartIcon;