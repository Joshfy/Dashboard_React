import React from "react";
import styled from "styled-components";

export function ClientesPage() {
  const cantidadUsuarios = 150;
  const usuariosAtendidos = [
    "Usuario 1",
    "Usuario 2",
    "Usuario 3",
    "Usuario 4",
    "Usuario 5",
  ];

  return (
    <>
      <Content>
        <Title>Clientes Satisfechos</Title>
        <Description>
          ¡Bienvenido a nuestra sección de clientes! Aquí puedes encontrar
          información sobre la cantidad de usuarios y algunos de nuestros
          clientes atendidos.
        </Description>
        <UsuariosInfo>
          <CantidadUsuarios>
            <UsuariosTitle>Cantidad de Usuarios:</UsuariosTitle>
            <UsuariosNumber>{cantidadUsuarios}</UsuariosNumber>
          </CantidadUsuarios>
          <UsuariosAtendidos>
            <UsuariosTitle>Usuarios Atendidos Recientemente:</UsuariosTitle>
            <UsuariosList>
              {usuariosAtendidos.map((usuario, index) => (
                <UsuarioItem key={index}>{usuario}</UsuarioItem>
              ))}
            </UsuariosList>
          </UsuariosAtendidos>
        </UsuariosInfo>
      </Content>
    </>
  );
}

const Content = styled.div`
  background: linear-gradient(45deg, #000, #ffcc00);
  text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
  padding: 15px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 30px;
  text-align: center;
`;

const UsuariosInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const CantidadUsuarios = styled.div`
  text-align: center;
`;

const UsuariosTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 10px;
`;

const UsuariosNumber = styled.p`
  font-size: 2em;
  font-weight: bold;
  color: #ffcc00;
  text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00;
`;

const UsuariosAtendidos = styled.div`
  text-align: center;
`;

const UsuariosList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const UsuarioItem = styled.li`
  font-size: 1.1em;
  margin-bottom: 5px;
`;
