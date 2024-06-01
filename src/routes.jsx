import { Route, Routes,BrowserRouter } from "react-router-dom";
import App from "./App" 
export default function AppRoutes(){
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={App} />
    </Routes>
  </BrowserRouter>
  )
}