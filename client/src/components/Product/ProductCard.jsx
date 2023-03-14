import React, { useState } from 'react';
import styled from 'styled-components';



const ProductCard = ({ name, price, image, hoverImage }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <ProductContainer onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
            <ProductImage src={image} alt={name} />
            {hoverImage && isHovered && <ProductImageHover src={hoverImage} alt={name} />}
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
        </ProductContainer>
    );
};


const ProductContainer = styled.div`
  width: 300px;
  height: 400px;
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease-in-out;
`;

const ProductImageHover = styled(ProductImage)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
`;

const ProductName = styled.h2`
  margin-top: 10px;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export default ProductCard;