import React, { useState, useEffect } from "react";
import styled from "styled-components";

export function HomePage() {
  const [productos, setProductos] = useState(0);
  const [usuarios, setUsuarios] = useState(0);
  const [ventas, setVentas] = useState(0);

  useEffect(() => {
    const animateNumbers = (targetProductos, targetUsuarios, targetVentas, duration) => {
      const totalFrames = 60;

      const incrementProductos = Math.ceil(targetProductos / totalFrames);
      const incrementUsuarios = Math.ceil(targetUsuarios / totalFrames);
      const incrementVentas = Math.ceil(targetVentas / totalFrames);

      const intervalProductos = setInterval(() => {
        setProductos((prevProductos) => Math.min(prevProductos + incrementProductos, targetProductos));
      }, duration / totalFrames);

      const intervalUsuarios = setInterval(() => {
        setUsuarios((prevUsuarios) => Math.min(prevUsuarios + incrementUsuarios, targetUsuarios));
      }, duration / totalFrames);

      const intervalVentas = setInterval(() => {
        setVentas((prevVentas) => Math.min(prevVentas + incrementVentas, targetVentas));
      }, duration / totalFrames);

      setTimeout(() => {
        clearInterval(intervalProductos);
        clearInterval(intervalUsuarios);
        clearInterval(intervalVentas);
      }, duration);
    };

    animateNumbers(30, 50, 100, 4000);
  }, []);

  return (
    <>
      <Content>
        <h2>Estamos en el Home</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque
          accusamus possimus porro at voluptatum perferendis earum sequi
          distinctio? Rerum modi minima <br />
          expedita quasi eligendi voluptas debitis earum quibusdam ad cupiditate.
        </p>
        <Columns>
          <Column>
            <h3>Productos Totales</h3>
            <NeonNumber>{productos}</NeonNumber>
          </Column>
          <Column>
            <h3>Usuarios</h3>
            <NeonNumber>{usuarios}</NeonNumber>
          </Column>
          <Column>
            <h3>Ventas Realizadas</h3>
            <NeonNumber>{ventas}</NeonNumber>
          </Column>
        </Columns>
      </Content>
    </>
  );
}

const Content = styled.div`
  background-color: #868686;
  color: #000000;
  padding: 15px;
  width: 100vw;
  height: 100vh;
`;

const Columns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

`;

const Column = styled.div`
  flex: 1;
  text-align: center;
  background-color: #0e0d0d;
  padding: 10px;
  border-radius: 8px;
  text-shadow: 0 0 10px #eeff00, 0 0 20px #eeff00, 0 0 30px #eeff00;
  margin: 20px;
  box-shadow: 0 0 5px #eeff00, 0 0 20px #eeff00, 0 0 30px #eeff00;


  h3 {
    margin-bottom: 10px;
  }
`;

const NeonNumber = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: #f6ff00; /* Color rosa */
  text-shadow: 0 0 10px #eeff00, 0 0 20px #eeff00, 0 0 30px #eeff00;
`;
