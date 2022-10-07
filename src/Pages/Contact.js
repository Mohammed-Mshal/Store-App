import React from "react";
import HeaderSection from "../Components/headerSection/HeaderSection";
import InfoContact from "../Components/infoContact/InfoContact";
import QuestionsForm from "../Components/Questions/QuestionsForm";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderSection page={`contact`} background={`header_contact`} />
      <InfoContact />
      <QuestionsForm />
    </motion.div>
  );
}

export default Contact;
