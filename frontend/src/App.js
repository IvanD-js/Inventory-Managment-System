import "./App.css";
//import ProductForm from "./components/ProductForm";
import { useState } from "react";
//import logomongo from "./assets/logomongo.png";
//import logoreact from "./assets/logoreact.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
//import ProductTable from "./components/ProductTable";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";


function App() {
  const [recargar, setRecargar] = useState(false);
  //const actualizar = () => setRecargar(!recargar);

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
