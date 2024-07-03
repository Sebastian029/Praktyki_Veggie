import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Specials from "./pages/Specials";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/about" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact " element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
