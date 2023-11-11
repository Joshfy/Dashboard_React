import styled from 'styled-components';

const Cabecera = styled.header`
  background-color: #302c2c;
  height: 100px;
  max-block-size: calc(100% - 200px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  border-bottom: 2px solid black;

`;


const CT = styled.div`
 width: 200px;
  background-color: #bba3a3;
  color: black;
  height:103  px;
  border-right: 2px solid black;
  border-bottom: none;
`;
const Title = styled.h1`
 
  transform: translate(5px, 10px);
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  text-align:start;
  margin-right: 600px;


`;

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 10px;
`;
export function ElHeader() {
  return (
    <Cabecera>
        <CT>
        <Title>Dashboard</Title>
        </CT>
        <Navigation>
        <Logo>My Website</Logo>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Services</NavItem>
        <NavItem href="#">Contact</NavItem>
      </Navigation>
    </Cabecera>
  );
}
