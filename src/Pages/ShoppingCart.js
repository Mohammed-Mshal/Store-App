import React from "react";
import HeaderSection from "../Components/headerSection/HeaderSection";
import { useSelector } from "react-redux";
import Empty from "../Components/Empty/Empty";
import { Link } from "react-router-dom";
import Cart from "../Components/shoppingCart/Cart";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

function ShoppingCart() {
  const shoppingCart = useSelector((state) => state.Cart);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderSection page={`Shopping cart`} background={`shopping_cart`} />
      {shoppingCart.length === 0 ? (
        <Empty typePage={`Shopping Cart`} />
      ) : (
        <Cart />
      )}
      <div className="d-flex justify-content-center pt-4 pb-5">
        <Link
          to={`/Store-App/shop/all-products`}
          className="btn btn-secondary mb-5 px-5 py-2"
        >
          GO TO SHOP
        </Link>
      </div>
    </motion.div>
  );
}

export default ShoppingCart;
