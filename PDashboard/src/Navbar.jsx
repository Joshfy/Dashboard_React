import { RoutesNavLinks } from './Routes/routes'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { FaChartBar, FaHome, FaUserFriends  } from "react-icons/fa";

const ContentNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 200px;
  background-color: #bba3a3;
  padding-top: 50px;
  border-right: 2px solid black;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin-left: 5px;
`;

const Letras = styled.div`
display:flex;
margin-left: 5px;
`;

export function Navegador() {
  return (
    <>    
    
      <ContentNavbar>
        <Letras>
            <FaHome/>
            <NavItem to="/home">  Page Inicio</NavItem>
        </Letras>
        <Letras>
            <FaChartBar/>
            <NavItem to="/ventas">Page Ventas</NavItem>
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
