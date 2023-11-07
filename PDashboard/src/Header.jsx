import styled from 'styled-components';

const Cabecera = styled.header`
  background-color: #302c2c;
  height: 100px;
  max-block-size: 100vh;
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
export function ElHeader() {
  return (
    <Cabecera>
        <CT>
        <Title>Dashboard</Title>
        </CT>
         <p>Panel de control</p>
    </Cabecera>
  );
}
