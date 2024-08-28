import "@fontsource/poppins/400.css";
import './App.css';
import { Navbar } from './components/navBar/Navbar';
import { LoginSignup } from "./pages/LoginSignup";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from "./pages/Shop.jsx";
import { ShopCategory } from "./pages/ShopCategory";
import { Product } from "./pages/Product.jsx";
import { Cart } from "./pages/Cart";
import { Footer } from './components/Footer/Footer'
import men_banner from "./components/assets/men_bannner.jpg";
import women_banner from './components/assets/women_banner.jpg'
import Kids_banner from './components/assets/kid_banner.jpg'
import Login from "./pages/Login.jsx";


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={Kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />} />

          <Route path="/product/:productId" element={<Product />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />

      </BrowserRouter >
    </>
  )
}

export default App
