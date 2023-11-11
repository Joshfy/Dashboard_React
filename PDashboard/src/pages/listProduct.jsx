// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Content = styled.div`
background-color: #7b7b7b;
color: #170080;
padding: 15px; 
width: 100vw;
height: 1100px;



`;

const ConC = styled.div`
display: flex;
display: grid;
grid-template-columns: repeat(5, 2fr);
overflow: hidden; /* Esto ocultará cualquier contenido que se salga del contenedor */
flex-direction: column;
`;

const ProductCard = styled.div`
  box-shadow: 0 0 10px #101010, 0 0 20px #101010, 0 0 30px #101010;
  padding: 10px;
  width: 257px;
    height: 334px;
  gap: 10px;
  margin: 10px;
  overflow: hidden; /* Esto ocultará cualquier contenido que se salga del contenedor */
  background-color: white; /* Esto ocultará cualquier contenido


`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  font-size: 10px;
  font-weight: bold;
`;

const ProductPrice = styled.p`
  font-weight: bold;
`;

const ProductDescription = styled.p`
  font-size: 14px;
`;

const ProductCategory = styled.p`
  font-style: italic;
`;

const ProductRating = styled.p`
  font-size: 14px;
`;
const TIT = styled.h1`
font-size: 14px;
margin-top: 10px;
`;

export function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener los productos:', error));
  }, []);

  return (
    <Content>
            <TIT>Lista de Productos</TIT>

      <ConC >

        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.title} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>Precio: ${product.price}</ProductPrice>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductCategory>Categoría: {product.category}</ProductCategory>
            <ProductRating>Valoración: {product.rating.rate} (Total de votos: {product.rating.count})</ProductRating>
          </ProductCard>
        ))}
      </ConC>
    </Content>
  );
}