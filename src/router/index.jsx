import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CartPage from "../pages/cart";
import Home from "../pages/home";
import Login from "../pages/login";
import ProductPage from "../pages/product";
import ProductsPage from "../pages/products";
import Register from "../pages/register";
import ScrollToTop from "./scrollTop";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;