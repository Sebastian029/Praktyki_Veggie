import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./pages/Menu";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/specials" element={<Menu />} />
        <Route path="/about" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact " element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}
