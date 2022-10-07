import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { motion } from "framer-motion";

function Testimonial() {
  const [widthWindow, setWidthWindow] = useState(true);
  useEffect(() => {
    setWidthWindow(window.innerWidth);
  }, []);
  return (
    <motion.div
    initial={{ y: "200", opacity: 0 }}
    whileInView={{ y: "0", opacity: 1 }}

    className="container-md pt-5 px-md-5 mx-auto">
      <h2 className="text-center text-white mt-5">WHAT PEOPLE SAY ABOUT US</h2>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={widthWindow >= 768 ? true : false}
        pagination={{ clickable: true }}
        className={`container testimonial rounded-5`}
      >
        <SwiperSlide className="my-5 bg-light p-md-5 p-2 rounded-5">
          <p className="text-center fw-semibold px-5 py-2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consectetur molestiae explicabo, tempore facere vel vero molestias
            esse minima error odit cumque officia, aliquam exercitationem sit,
            architecto cum animi sed?
          </p>
          <h3 className="text-center text_red">-ANDREW CHARLSTON</h3>
        </SwiperSlide>
        <SwiperSlide className="my-5 bg-light p-md-5 p-2 rounded-5">
          <p className="text-center fw-semibold px-5 py-2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consectetur molestiae explicabo, tempore facere vel vero molestias
            esse minima error odit cumque officia, aliquam exercitationem sit,
            architecto cum animi sed?
          </p>
          <h3 className="text-center text_red">-ANDREW CHARLSTON</h3>
        </SwiperSlide>
        <SwiperSlide className="my-5 bg-light p-md-5 p-2 rounded-5">
          <p className="text-center fw-semibold px-5 py-2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            consectetur molestiae explicabo, tempore facere vel vero molestias
            esse minima error odit cumque officia, aliquam exercitationem sit,
            architecto cum animi sed?
          </p>
          <h3 className="text-center text_red">-ANDREW CHARLSTON</h3>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}

export default Testimonial;
