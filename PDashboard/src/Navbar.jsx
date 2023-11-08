import { RoutesNavLinks } from './Routes/routes'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { FaChartBar, FaHome, FaUserFriends  } from "react-icons/fa";
import { useState } from 'react';

const ContentNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-block-size: 100vh;
  width: 200px;
  background-color: #bba3a3;
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
  display:flex;
  margin-left: 7px;
    margin-bottom: 15px;
`;

const Sublinks = styled.ul`
   display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  transform: translate(-51px, 20px);

`;


export function Navegador() {

  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleNavItemClick = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
     <>
       <ContentNavbar>
        <Letras>
          <FaHome/>
          <NavItem   to="/home">Page Inicio</NavItem>
        </Letras>
          <Letras>
              <FaChartBar/>
              <NavItem onClick={handleNavItemClick} to="/ventas">Page Ventas</NavItem>
              {isSubmenuOpen && (
            <Sublinks>
              <a href="/listP">Listar Product</a>
              <a href="/home/orange">Orange</a>
            </Sublinks>
          )}
          </Letras> 
          <Letras>
          <FaUserFriends/> 
          <NavItem to="/clients">Page Clientes</NavItem>  
          </Letras>
        </ContentNavbar>
        <RoutesNavLinks/>
      </>
    )
  }

