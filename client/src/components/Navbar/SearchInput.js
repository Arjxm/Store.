import React from 'react';
import styled from 'styled-components';
import {BiSearch} from "react-icons/all";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
`;

const Searchinput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 16px;
  margin-left: 10px;
`;

const SearchIcon = styled.i`
  color: #333;
`;

const SearchInput = ({ value, onChange }) => {
    return (
        <SearchContainer>
            <BiSearch/>
            <Searchinput
                type="text"
                placeholder="Search"
                value={value}
                onChange={onChange}
            />
        </SearchContainer>
    );
};

export default SearchInput;