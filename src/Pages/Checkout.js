import React from "react";
import BillingDetails from "../Components/Bill/BillingDetails";
import HeaderSection from "../Components/headerSection/HeaderSection";
import { containerVariants } from "../animation/variants";
import { motion } from "framer-motion";

function Checkout() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderSection page={`Checkout`} background={`proceed-checkout`} />
      <BillingDetails />
    </motion.div>
  );
}

export default Checkout;
