import React from "react";
import { motion } from "framer-motion";

function WeAre() {
  return (
    <div className="we_are position-relative py-5">
      <div
        className="background position-absolute top-0 start-0 bg-dark h-100 w-100"
        style={{
          zIndex: `-1`,
          clipPath: `polygon(0% 0%, 100% 0%,100% 50%,0% 100%)`,
        }}
      ></div>
      <div className="container row mx-auto justify-content-between align-items-center py-5">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          transition={{ delay: 1 }}
          className="col-xl-5 col-lg-6  mx-auto mx-lg-0"
        >
          <h2 className="text_red fw-bold">We Are App Store</h2>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            sunt dignissimos. Minima a consequuntur animi pariatur inventore
            suscipit nobis voluptatum at debitis, eum saepe sint doloribus
            labore corrupti molestias accusamus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempore, sunt dignissimos. Minima a
            consequuntur animi pariatur inventore suscipit nobis voluptatum at
            debitis, eum saepe sint doloribus labore corrupti molestias
            accusamus.
          </p>
        </motion.div>
        <motion.img
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          transition={{ delay: 1 }}
          alt="About"
          style={{
            aspectRatio: `16/9`,
            objectFit: `fill`,
            boxShadow: `20px 20px 0 0 black`,
          }}
          className="img-fluid col-xl-5 col-lg-6 col-10  p-0 mx-auto mx-lg-0"
          src={require(`../../imgs/alexander-redl-d3bYmnZ0ank-unsplash.webp`)}
        />
      </div>
    </div>
  );
}

export default WeAre;
