import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const Content = styled.div`
display: flex;
gap: 15px;
`;
const ProductCard = styled.div`
  border: 3px solid #020202;
  padding: 10px;
  margin-bottom: 10px;
  max-width: 500px;
  max-height: 500px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
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

export function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener los productos:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      <Content className="product-list">
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
      </Content>
    </div>
  );
}