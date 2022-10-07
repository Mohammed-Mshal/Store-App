import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <div className="logo container d-flex flex-wrap justify-content-center align-items-center mx-auto my-4">
      <motion.img
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{delay:.5}}
        src="https://www.webstickersmuraux.com/fr/img/asfs360-jpg/folder/products-listado-merchanthover/autocollants-nike-logo.jpg"
        alt="nike "
        className="w-75 logo"
        style={{ maxWidth: `150px` }}
      />
      <motion.img
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{delay:.5}}
        src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2020/03/the-4th-logo-1024x862.jpg"
        alt="nike "
        className="w-75 mx-3 logo"
        style={{ maxWidth: `100px`, maxHeight: `100px` }}
      />
      <motion.img
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{delay:.5}}
        src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Icon-Logo.wine.svg"
        alt="nike "
        className="w-75 logo"
        style={{ maxWidth: `150px` }}
      />
    </div>
  );
}

export default Logo;
