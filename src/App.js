import "./App.css";
import NavComponent from "./Components/navbar/NavComponent";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Route, Routes,useLocation } from "react-router";
import Home from "./Pages/Home";
import "swiper/css";
import Footer from "./Components/footer/Footer";
import About from "./Pages/About";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/Slices/products";
import { fetchCategory } from "./store/Slices/category";
import ShoppingProduct from "./Pages/ShoppingProduct";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import ShoppingCart from "./Pages/ShoppingCart";
import WishlistPage from "./Pages/WishlistPage";
import Checkout from "./Pages/Checkout";
import ConfirmCheckout from "./Pages/ConfirmCheckout";
import { AnimatePresence } from "framer-motion";

function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategory());
  }, []);
  const location=useLocation()
  return (
    <div className="App">
      <NavComponent />
      <AnimatePresence>
        <Routes location={location} key={location.key}>
          <Route path="/Store-App" element={<Home />} />
          <Route path="/Store-App/about" element={<About />} />
          <Route path="/Store-App/contact" element={<Contact />} />
          <Route path="/Store-App/shop/:category" element={<Shop />} />
          <Route path="/Store-App/products/:idProduct" element={<ShoppingProduct />} />
          <Route path="/Store-App/shopping-cart" element={<ShoppingCart />} />
          <Route path="/Store-App/wishlist" element={<WishlistPage />} />
          <Route path="/Store-App/proceed-checkout" element={<Checkout />} />
          <Route path="/Store-App/Confirm_checkout" element={<ConfirmCheckout />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
