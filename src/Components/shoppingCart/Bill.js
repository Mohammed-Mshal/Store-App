import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Bill(props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="col-lg-4 py-md-5"
    >
      <div className="bg-dark text-white p-3">
        <h4 className="border-bottom border-secondary py-2">CART TOTALS</h4>
        <p className="border-bottom border-secondary py-2 mb-0 d-flex justify-content-between">
          <span className=" text-muted">Subtotals:</span>
          <span>${+props.totalCount.toFixed(2)}</span>
        </p>
        <h5 className="border-bottom border-secondary py-3">Shipping</h5>
        <p className="text-muted">Flat Rate $15</p>
        <p className="border-bottom border-secondary text-muted mb-0">
          Where To: London, Uk
        </p>
        <h5 className="py-2 mb-0 d-flex justify-content-between">
          <span>Total</span> <span>${(+props.totalCount + 15).toFixed(2)}</span>
        </h5>
      </div>
      <div className="d-flex justify-content-between flex-column flex-md-row mt-4 ">
        <Link
          to={`/Store-App/proceed-checkout`}
          className="btn btn-secondary fw-bold py-2 my-2 my-md-0"
        >
          Proceed To Checkout
        </Link>
        <Link
          to={`/shop/all-products`}
          className="btn btn-light border_red fw-bold py-2 my-2 my-md-0"
        >
          Continue Shopping
        </Link>
      </div>
    </motion.div>
  );
}

export default Bill;
