import React from "react";
import { motion } from "framer-motion";
function AboutCom() {
  return (
    <div className="container px-5 mt-5">
      <div className="row flex-column justify-content-center align-items-center flex-md-row bg-light">
        <motion.img
          initial={{ x: "-100", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          src="https://img.freepik.com/premium-photo/abstract-blur-shopping-mall-department-store-interior-background_1417-5929.jpg?w=2000"
          alt="background Store"
          className="img-fluid col-lg-6 col-12 p-0"
          style={{ aspectRatio: `16/9`, objectFit: `fill` }}
        />
        <motion.div
          initial={{ x: "100", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          className="col-lg-6 col-12 bg-light px-4 text-center text-md-start"
        >
          <h3 className="text_red mb-md-4 mt-3">About Store</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consectetur molestiae explicabo, tempore facere vel vero molestias
            esse minima error odit cumque officia, aliquam exercitationem sit,
            architecto cum animi sed? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Unde consectetur molestiae explicabo, tempore
            facere vel vero molestias esse minima error odit cumque officia,
            aliquam exercitationem sit, architecto cum animi sed?
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutCom;
