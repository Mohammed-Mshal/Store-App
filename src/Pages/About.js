import React from "react";
import Testimonial from "../Components/About/Testimonial";
import Categories from "../Components/Categories/Categories";
import HeaderSection from "../Components/headerSection/HeaderSection";
import OurTeam from "../Components/OurTeam/OurTeam";
import Roles from "../Components/Roles/Roles";
import WeAre from "../Components/weAre/WeAre";
import Logo from "../Components/logo/Logo";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";


function About() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <HeaderSection page={`ABOUT US`} background={`header_about`} />
      <WeAre />
      <Roles />
      <div className="bg-dark">
        <Categories />
      </div>
      <div className="position-relative">
        <div
          className="bg-dark position-absolute start-0 top-0 h-100 w-100"
          style={{
            clipPath: ` polygon(100% 30%, 100% 80%, 0% 80%, 0% 50%)`,
            zIndex: "-1",
          }}
        ></div>
        <OurTeam />
        <Testimonial />
      </div>
      <Logo />
    </motion.div>
  );
}

export default About;
