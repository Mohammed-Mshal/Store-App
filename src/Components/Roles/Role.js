import React from "react";
import { motion } from "framer-motion";

function Role(props) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="role col-xl-3 col-lg-4 col-md-5 col-10 px-xl-4"
    >
      {props.icon}
      <h4 className="text_red my-3">{props.role}</h4>
      <p>{props.descriptionRole}</p>
    </motion.div>
  );
}

export default Role;
