import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div className="logo container d-flex flex-wrap justify-content-center align-items-center mx-auto my-4">
      <motion.img
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{delay:.5}}
        src="../../imgs/autocollants-nike-logo.jpg"
        alt="nike "
        className="w-75 logo"
        style={{ maxWidth: `150px` }}
      />
      <motion.img
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{delay:.5}}
        src="../../imgs/the-4th-logo-1024x862.jpg"
        alt="nike "
        className="w-75 mx-3 logo"
        style={{ maxWidth: `100px`, maxHeight: `100px` }}
      />
      <motion.img
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{delay:.5}}
        src="../../imgs/Converse_(shoe_company)-Icon-Logo.wine.svg"
        alt="nike "
        className="w-75 logo"
        style={{ maxWidth: `150px` }}
      />
    </div>
  );
}

export default Logo;
