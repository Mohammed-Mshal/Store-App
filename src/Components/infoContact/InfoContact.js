import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
function InfoContact() {
  return (
    <div className="info_contact position-relative py-5">
      <div
        className="background position-absolute top-0 start-0 bg-dark h-100 w-100"
        style={{
          zIndex: `-1`,
          clipPath: `polygon(0% 0%, 100% 0%,100% 25%,0% 60%)`,
        }}
      ></div>
      <div className="container row flex-column-reverse flex-xl-row mx-auto my-5 justify-content-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{delay:.5}}
          className="information col-xl-4 col-md-8 col-10 mx-auto mx-xl-0 px-0"
        >
          <ul className="list-unstyled bg-dark px-md-4 px-2 py-md-5 py-3 m-0">
            <li className="text-white d-flex flex-column  text-center text-md-start mx-auto">
              <h3 className=" text-center">Location 1</h3>
              <ul className="list-unstyled">
                <li className="my-4">
                  <FiMapPin className="fs-3 me-2 text_red" />
                  2715 Ash Dr.San Jose, South Dakota 83475
                </li>
                <li className="my-4">
                  <BsTelephoneFill className="fs-3 me-2 text_red" />
                  (808) 555-0111
                </li>
                <li className="my-4">
                  <FiMail className="fs-3 me-2 text_red" />
                  StoreApp.contacts@example.com
                </li>
              </ul>
            </li>
            <li className="text-white d-flex flex-column  text-center text-md-start mx-auto">
              <h3 className=" text-center">Location 2</h3>
              <ul className="list-unstyled">
                <li className="my-4">
                  <FiMapPin className="fs-3 me-2 text_red" />
                  445 MLK street, South Dakota 55631
                </li>
                <li className="my-4">
                  <BsTelephoneFill className="fs-3 me-2 text_red" />
                  (808) 333-0888
                </li>
                <li className="my-4">
                  <FiMail className="fs-3 me-2 text_red" />
                  StoreApp.contacts@example.com
                </li>
              </ul>
            </li>
            <li className="d-flex justify-content-center">
              <a href="#facebook" className="mx-2">
                <FaFacebookF className="me-auto ms-auto ms-md-0 text_red fs-3" />
              </a>
              <a href="#instagram" className="mx-2">
                <FaInstagram className="mx-auto text_red fs-3" />
              </a>
              <a href="#twitter" className="mx-2">
                <FaTwitter className="mx-auto text_red fs-3" />
              </a>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{delay:.5}}
          className="col-xl-8 col-md-8 col-10 mx-auto mx-xl-0 px-0"
        >
          <img
            src={require(`../../imgs/LocationMap.jpg`)}
            className="img-fluid h-100"
            alt="Locations"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default InfoContact;
