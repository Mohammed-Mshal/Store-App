import React from "react";
import { motion } from "framer-motion";
function Empty(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-dark py-5 pb-4 "
    >
      <div
        className="container text-center mt-5 px-4"
        style={{ maxWidth: `600px` }}
      >
        <h1 className="text-uppercase text_red fw-bold mb-3">
          Your {props.typePage} is empty
        </h1>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, sunt
          dignissimos. Minima a consequuntur animi pariatur inventore suscipit
          nobis voluptatum at debitis, eum saepe sint doloribus labore corrupti
          molestias accusamus.
        </p>
      </div>
    </motion.div>
  );
}

export default Empty;
