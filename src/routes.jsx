import { Route, Routes,BrowserRouter } from "react-router-dom";
import Forms from "./pages/Forms";
import Home from "./pages/Home";
export default function AppRoutes(){
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/forms" Component={Forms} />
    </Routes>
  </BrowserRouter>
  )
}