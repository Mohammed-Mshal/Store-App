import React from "react";
import HeaderSection from "../Components/headerSection/HeaderSection";
import Products from "../Components/allProducts/Products";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

function Shop() {
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderSection page={`SHOP`} background={`header_shop`} />
      <Products />
    </motion.div>
  );
}

export default Shop;
