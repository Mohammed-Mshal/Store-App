import React from "react";
import { Link } from "react-router-dom";
import HeaderSection from "../Components/headerSection/HeaderSection";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

function ConfirmCheckout() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderSection page={`Checkout`} background={`proceed-checkout`} />
      <div className="bg-dark py-5 pb-4 ">
        <div
          className="container text-center mt-5 px-4"
          style={{ maxWidth: `600px` }}
        >
          <h1 className="text-uppercase text_red fw-bold mb-3">
            Thanks For Your Order
          </h1>
          <p className="text-white">
            Your Order is accepted, The manager will contact you shortly.
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-4 pb-5">
        <Link
          to={`/shop/all-products`}
          className="btn btn-secondary mb-5 px-5 py-2"
        >
          GO TO SHOP
        </Link>
      </div>
    </motion.div>
  );
}

export default ConfirmCheckout;
