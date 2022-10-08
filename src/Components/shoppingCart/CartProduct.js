import React, { useEffect, useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, removeProductFromCart } from "../../store/Slices/cart";
import { motion } from "framer-motion";
function Cart_Product(props) {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.Cart);
  const [product, setProduct] = useState(
    cartProduct.filter((el) => {
      return el.product.id === props.id;
    })[0]
  );
  useEffect(() => {
    setProduct(
      cartProduct.filter((el) => {
        return el.product.id === props.id;
      })[0]
    );
  }, [cartProduct]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: props.index / 2 }}
      className="d-flex align-items-center justify-content-between mb-4"
    >
      <div className="d-flex align-items-center">
        <button
          className="btn"
          onClick={() => dispatch(removeProductFromCart(props.product))}
        >
          <ImCancelCircle />
        </button>
        <img
          src={props.image}
          alt="image_for_product"
          style={{ maxHeight: "80px" }}
        />
        <p className="fw-bold mb-0 d-none d-md-block">
          {props.title.slice(0, 40)}
        </p>
      </div>
      <div
        className="d-flex align-items-center justify-content-between"
        style={{ width: `150px` }}
      >
        <div className="counter border_red rounded-3 d-flex align-items-center justify-content-between px-2 py-1">
          <button className="btn border-0 p-0">
            <AiOutlineLeft
              className="border-0 "
              onClick={() => {
                dispatch(
                  changeCount({
                    product: props.product,
                    count: product.count + 1,
                  })
                );
              }}
            />
          </button>
          <p className="mb-0 mx-2">{product.count}</p>
          <button className="btn border-0 p-0">
            <AiOutlineRight
              className=" border-0 "
              onClick={() => {
                product.count >= 2 &&
                  dispatch(
                    changeCount({
                      product: props.product,
                      count: product.count - 1,
                    })
                  );
              }}
            />
          </button>
        </div>
        <p className="text-muted fw-bold mb-0">
          ${(product.count * props.price).toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}

export default Cart_Product;
