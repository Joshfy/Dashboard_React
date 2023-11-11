import { RoutesNavLinks } from './Routes/routes';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaChartBar, FaHome, FaUserFriends } from 'react-icons/fa';
import { useState } from 'react';

const ContentNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-block-size: 100vh;
  width: 200px;
  background-color: #7d7d7d;
  padding-top: 50px;
  border-right: 2px solid black;
  
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-left: 5px;
  cursor: pointer;
  
`;

const Letras = styled.div`
  display: flex;
  margin-left: 7px;
  margin-bottom: 15px;
  font-size: 25px;
  &:focus,
  &:hover {
    border-color: blue;
    box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    outline: none;
    background-color: #ffff0028;

  }

`;

const Sublinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  transform: translate(-23px, 41px);
  background-color: none;
`;

export function Navegador() {
  const [isVentasSubmenuOpen, setIsVentasSubmenuOpen] = useState(false);
  const [isClientesSubmenuOpen, setIsClientesSubmenuOpen] = useState(false);

  const handleVentasNavItemClick = () => {
    setIsVentasSubmenuOpen(!isVentasSubmenuOpen);
  };

  const handleClientesNavItemClick = () => {
    setIsClientesSubmenuOpen(!isClientesSubmenuOpen);
  };

  return (
    <>
      <ContentNavbar>
        <Letras>
          <FaHome />
          <NavItem to="/home">Page Inicio</NavItem>
        </Letras>
        <Letras>
          <FaChartBar />
          <NavItem onClick={handleVentasNavItemClick} to="/ventas">
            Page Ventas
          </NavItem>
          {isVentasSubmenuOpen && (
            <Sublinks>
              <a href="/listP">Listar </a>
              <a href="/">Agregar</a>
            </Sublinks>
          )}
        </Letras>
        <Letras>
          <FaUserFriends />
          <NavItem onClick={handleClientesNavItemClick} to="/clients">
            Page Clientes
          </NavItem>
          {isClientesSubmenuOpen && (
            <Sublinks>
              <a href="/listC">Listar</a>
              <a href="/listCompleto">Agregar</a>
            </Sublinks>
          )}
        </Letras>
      </ContentNavbar>
      <RoutesNavLinks />
    </>
  );
}
