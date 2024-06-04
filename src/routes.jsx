import { Route, Routes,BrowserRouter } from "react-router-dom";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
import VisualizacaoCartaoDeVacina from "./pages/VisualizacaoCartaoDeVacina";
import { ToastContainer } from "react-toastify";
export default function AppRoutes(){
  return (
  <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/forms" Component={Forms} />
      <Route path="/cartaodevacina" Component={VisualizacaoCartaoDeVacina} />
    </Routes>
  </BrowserRouter>
  )
}