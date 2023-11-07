import { NavLink } from "react-router-dom";
import styled from "styled-components"

export function VentasPage(){
    return(
        <>
        <Content>
        <h2>Estamos en Ventas </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Cumque accusamus possimus porro at voluptatum perferendis earum 
                sequi distinctio? Rerum modi minima <br/>expedita quasi eligendi 
                voluptas debitis earum quibusdam ad cupiditate.</p>
        </Content>
        </>
    )
}
const Content = styled.div`
background-color: #f3f3f3;
color: #170080;
padding: 15px;

`;
