import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import Discount from "./Discount";
import Bill from "./Bill";
import { motion } from "framer-motion";
function Cart() {
  const cartProduct = useSelector((state) => state.Cart);
  const [totalCount, setTotalCount] = useState(0);
  useEffect(() => {
    let total = 0;
    cartProduct.forEach((ele) => {
      total += ele.count * ele.product.price;
    });
    setTotalCount(total);
  }, [cartProduct]);

  return (
    <div className="cart_shopping">
      <div className="container row mx-auto justify-content-between mt-5">
        <div className="col-lg-7 my-lg-4 py-lg-4 d-flex flex-column">
          <div className="product pb-5">
            <h2 className="mb-4">PRODUCT</h2>
            {cartProduct.map((ele, ind) => {
              return (
                <CartProduct
                  key={ele.product.id}
                  id={ele.product.id}
                  index={ind}
                  product={ele.product}
                  image={ele.product.image}
                  title={ele.product.title}
                  price={ele.product.price}
                />
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="my-lg-5 py-5 pe-lg-5"
          >
            <Discount />
          </motion.div>
        </div>
        <Bill totalCount={totalCount} />
      </div>
    </div>
  );
}

export default Cart;
