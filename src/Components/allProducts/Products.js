import React, { useState } from "react";
import CartProduct from "../cart-product/CartProduct";
import { useSelector } from "react-redux";
import DropDownSort from "../dropDownSort/DropDownSort";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { productsVariants } from "../../animation/variants";

function Products() {
  const param = useParams();
  const allProducts = useSelector((state) => state.Products);
  const productAfterCategory =
    param.category === `all-products`
      ? allProducts
      : allProducts.filter((e) => e.category === param.category);
  const sectionShow = Math.ceil(productAfterCategory.length / 8);
  const [sectionActive, setSectionActive] = useState(1);
  const productsShow = productAfterCategory.slice(
    sectionActive * 8 - 8,
    sectionActive * 8 <= productAfterCategory.length
      ? sectionActive * 8
      : productAfterCategory.length
  );

  let cir = [];
  for (let i = 1; i <= sectionShow; i++) {
    cir.push(
      <div
        className={`${
          sectionActive === i ? "btn btn-danger" : `btn btn-outline-dark`
        } p-2 px-3 rounded-pill mx-1`}
        key={i}
        onClick={(e) => setSectionActive(+e.target.textContent)}
      >
        {i}
      </div>
    );
  }
  return (
    <div className="products py-5">
      <div className="container">
        <DropDownSort
          products={productAfterCategory}
          sectionActive={sectionActive}
        />

        <motion.div 
        variants={productsVariants}
        initial='hidden'
        animate='visible'
        className="d-flex flex-wrap justify-content-between">
          {productsShow.map((ele) => {
            return (
              <CartProduct
                key={ele.id}
                image={ele.image}
                title={ele.title}
                id={ele.id}
                price={ele.price}
              />
            );
          })}
        </motion.div>
        <div className="product_circle d-flex justify-content-center" style={{zIndex:10}}>
          {cir}
        </div>
      </div>
    </div>
  );
}

export default Products;
