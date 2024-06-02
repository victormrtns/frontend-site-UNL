import { Route, Routes,BrowserRouter } from "react-router-dom";
import Forms from "./pages/Forms";
export default function AppRoutes(){
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Forms} />
    </Routes>
  </BrowserRouter>
  )
}