import { Navegador } from './Navbar'
import { ElHeader } from './Header'
import styled from 'styled-components'
function App() {

  return (
    <>
    <ContentGeneral>
      <ElHeader/>
        <Content>
         <Navegador/>
        </Content>
    </ContentGeneral>
    

    </>
  )
}

export default App

const Content = styled.div`
display:flex;
max-height: 1110!important; 

`;

const ContentGeneral = styled.main`
background-color: #bbbbb6;
;`