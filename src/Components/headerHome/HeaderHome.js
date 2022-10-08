import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./headerHome.css";

function HeaderHome() {
  return (
    <div className="container">
      <Swiper
        className="slider text-light py-5"
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="row mx-auto my-auto px-5 align-items-center justify-content-around flex-column-reverse flex-md-row">
          <div className="col-12 col-md-5 text-start">
            <h2 className="mb-3 ">BUY EASILY</h2>
            <p>
              Buy quickly and easily your product without the cost and trouble
              with the direct shipping service{" "}
            </p>
            <button className="btn btn-secondary px-4">Read More</button>
          </div>
          <div className="col-12 col-md-5 mb-3">
            <img
              src={`../../imgs/Online-Payment-Transparent.png`}
              className={`img-fluid`}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="row mx-auto px-5 align-items-center justify-content-around flex-column-reverse flex-md-row">
          <div className="col-12 col-md-5 text-start">
            <h2 className="mb-3 ">CHOOSE YOUR CLOTHES WITH US</h2>
            <p>
              we will help you to choose the product that without the doubt
              suits your best and we mean it
            </p>
            <button className="btn btn-secondary px-4">Read More</button>
          </div>
          <div className="col-12 col-md-5 mb-3">
            <img
              src={`../../imgs/8-2-clothes-png-image.png`}
              className={`img-fluid`}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderHome;
