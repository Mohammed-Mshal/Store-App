import React from "react";
import Card from "react-bootstrap/Card";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion";
import "./ourTeam.css";
function OurTeam() {
  return (
    <div className="our_team pt-5">
      <div className="container text-center">
        <h2>OUR TEAM</h2>
        <p>PROFESSIONAL THAT WORKS WITH US</p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ width: "16rem" }}
          className={`card bg-light border-0 mx-auto`}
        >
          <Card.Img
            className="card-img rounded-pill w-50 mx-auto my-4"
            variant="top"
            src={require(`../../imgs/IMG_٢٠٢٢٠٦٢٦_١١٤٧١٠.jpg`)}
          />
          <Card.Body className="text-center">
            <Card.Title className="fs-6 text-muted">
              {" "}
              Front-End Developer
            </Card.Title>
            <Card.Title>Mohammed Mshal</Card.Title>
            <div className="my-2 link_social">
              <a href="#facebook" className="mx-2 text_red " alt={``}>
                <FaFacebook />
              </a>
              <a href="#mail" className="mx-2 text_red " alt={``}>
                <AiOutlineMail />
              </a>
              <a href="#instagram" className="mx-2 text_red " alt={``}>
                <FaInstagram />
              </a>
              <a href="#phone" className="mx-2 text_red " alt={``}>
                <BsFillTelephoneFill />
              </a>
            </div>
            <Card.Text>UT DONEC SUSCIPIT NUNC VOLUTPAT FAUCCIBUS.</Card.Text>
          </Card.Body>
        </motion.div>
      </div>
    </div>
  );
}

export default OurTeam;
