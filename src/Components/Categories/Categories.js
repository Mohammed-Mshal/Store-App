import React from "react";
import CardCategory from "./CardCategory";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Categories() {
  const category = useSelector((state) => state.Category);
  return (
    <div className="position-relative py-5">
      <div
        className="background position-absolute top-0 start-0 bg-dark h-100 w-100"
        style={{
          zIndex: `-1`,
          clipPath: `polygon(0% 0%, 100% 0%,100% 50%,0% 100%)`,
        }}
      ></div>
      <div className="container p-5 pt-2">
        <div className="d-flex justify-content-center mx-auto flex-wrap">
          <div className="w-100 text-center">
            <h3 className="text_red">Shop By Categories</h3>
            <p className="text-white-50">Pick a category you need</p>
          </div>
          <Link
            to={`/shop/all-products`}
            className="text-decoration-none my-2 mx-3"
          >
            <CardCategory type={`All Products`} />
          </Link>
          {category.length > 0 &&
            category.map((ele) => {
              return (
                <Link
                  to={`/shop/${ele}`}
                  key={ele}
                  className="text-decoration-none my-2 mx-3 "
                >
                  <CardCategory type={ele} />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
