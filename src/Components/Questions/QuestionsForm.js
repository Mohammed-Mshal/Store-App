import React from "react";
import FormQuestion from "./FormQuestion";
import { motion } from "framer-motion";

function QuestionsForm() {
  return (
    <div className="questions py-5">
      <div className="container row flex-xl-row flex-column justify-content-center align-items-center mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="col-xl-5 col-lg-8 col-10 fw-bold"
        >
          <h2 className="text_red fw-bold text-uppercase mb-3">Get In Touch</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consectetur molestiae explicabo, tempore facere vel vero molestias
            esse minima error odit cumque officia, aliquam exercitationem sit,
            architecto cum animi sed?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="col-xl-5 col-lg-8 col-10"
        >
          <FormQuestion />
        </motion.div>
      </div>
    </div>
  );
}

export default QuestionsForm;
