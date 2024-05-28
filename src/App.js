import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
