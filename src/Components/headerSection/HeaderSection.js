import React from "react";
import "./headerSection.css";
import { motion } from "framer-motion";
function HeaderSection(props) {
  
  return (
    <div
      className={`header_section ${props.background} py-5 text-white position-relative`}
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: .5 }}
        className="container"
      >
        <p>Home/{props.page.split(`-`).join(` `).toUpperCase()}</p>
        <h1>{props.page.split(`-`).join(` `).toUpperCase()}</h1>
      </motion.div>
    </div>
  );
}

export default HeaderSection;
