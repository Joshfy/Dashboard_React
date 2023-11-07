import { Route,Routes } from "react-router-dom";
import { HomePage } from "../pages/homePage";
import { ClientesPage } from "../pages/clientesPage";
import { VentasPage } from "../pages/ventasPage";
export function RoutesNavLinks() {
    return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/ventas" element={<VentasPage/>}/>
        <Route path="/clients" element={<ClientesPage/>}/>
      </Routes>
    )
  }