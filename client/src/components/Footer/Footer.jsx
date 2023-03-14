import React from 'react';
import styled from "styled-components";

const Footer = (props) => (
    <FooterContainer>
        <FooterWrapper>
        <div>
            <h1></h1>
        </div>

        <div>

        </div>

        <div>

        </div>
        </FooterWrapper>
    </FooterContainer>
);

const FooterContainer = styled.div`
background: aqua;
  display: flex;
justify-content: center;
`;

const FooterWrapper = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 80%;
`;
export default Footer;