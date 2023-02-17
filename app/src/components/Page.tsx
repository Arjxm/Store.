import React from 'react';
// @ts-ignore
import styled from 'styled-components';
import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
const Page = () => (
 <Main>
     <NavBar/>
     <ProductCard/>
 </Main>
);
const Main = styled.div`

`;
export default Page;