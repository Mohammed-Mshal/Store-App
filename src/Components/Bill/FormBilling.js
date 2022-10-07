import React from "react";
import "./formBilling.css";
import { motion } from "framer-motion";
function FormBilling() {
  return (
    <motion.form
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      className="billing d-flex flex-column"
    >
      <div className="d-flex justify-content-between my-3">
        <input
          type={`text`}
          placeholder="Name*"
          className="border_red flex-fill me-2 py-2 px-3 rounded-2"
        />
        <input
          type={`text`}
          placeholder="Surname*"
          className="border_red flex-fill ms-2 py-2 px-3 rounded-2"
        />
      </div>
      <div className="d-flex justify-content-between my-3">
        <input
          type={`text`}
          placeholder="Company Name"
          className="border_red flex-fill me-2 py-2 px-3 rounded-2"
        />
        <input
          type={`text`}
          placeholder="Country*"
          className="border_red flex-fill ms-2 py-2 px-3 rounded-2"
        />
      </div>
      <input
        type={`text`}
        placeholder="City*"
        className="border_red  py-2 px-3  rounded-2 my-3"
        required
      />
      <input
        type={`text`}
        placeholder="Address*"
        className="border_red  py-2 px-3  rounded-2 my-3"
        required
      />
      <input
        type={`tel`}
        placeholder="Phone Number"
        className="border_red  py-2 px-3  rounded-2 my-3"
        required
      />
      <input
        type={`email`}
        placeholder="E-mail*"
        className="border_red  py-2 px-3  rounded-2 my-3"
        required
      />
      <input
        type={`text`}
        placeholder="Zip code/post code*"
        className="border_red  py-2 px-3  rounded-2 my-3"
        required
      />
    </motion.form>
  );
}

export default FormBilling;
