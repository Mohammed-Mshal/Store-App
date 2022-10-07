import React from "react";
import { useSelector } from "react-redux";
import AboutCom from "../Components/About/AboutCom";
import Testimonial from "../Components/About/Testimonial";
import Categories from "../Components/Categories/Categories";
import HeaderHome from "../Components/headerHome/HeaderHome";
import Logo from "../Components/logo/Logo";
import OurProducts from "../Components/ourProducts/OurProducts";
import "../styles/home.css";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

function Home() {
  const products = useSelector((state) => state.Products);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home"
    >
      <div className="header_home d-flex align-items-center">
        <HeaderHome />
      </div>
      <Categories />
      <OurProducts products={products} />
      <div className="position-relative">
        <div
          className="bg-dark position-absolute start-0 top-0 h-100 w-100"
          style={{
            clipPath: ` polygon(100% 0%, 100% 80%, 0% 80%, 0% 50%)`,
            zIndex: "-1",
          }}
        ></div>
        <AboutCom />
        <Testimonial />
      </div>
      <Logo />
    </motion.div>
  );
}

export default Home;
