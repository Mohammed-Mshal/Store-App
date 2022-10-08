import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import { motion } from "framer-motion";
import "./formBilling.css";
function InfoBill() {
  const [typeBilling, setTypeBilling] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const cartProduct = useSelector((state) => state.Cart);
  useEffect(() => {
    let total = 0;
    cartProduct.forEach((ele) => {
      total += ele.count * ele.product.price;
    });
    setTotalCount(total);
  }, [cartProduct]);

  return (
    <div className="col-lg-4 py-md-5">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-dark text-white p-3"
      >
        <h5 className="border-bottom border-secondary py-2 text-muted">
          Products
        </h5>
        {cartProduct.map((ele) => {
          return (
            <p
              className="d-flex justify-content-between text-white fw-bold"
              key={ele.product.id}
            >
              <span>{ele.product.title}</span>
              <span>${+ele.product.price * +ele.count}</span>
            </p>
          );
        })}
        <p className="border-bottom border-secondary py-2 mb-0 d-flex justify-content-between">
          <span className=" text-muted">Subtotals:</span>
          <span>${+totalCount.toFixed(2)}</span>
        </p>
        <h5 className="border-bottom border-secondary py-3">Shipping</h5>
        <p className="text-muted">Flat Rate $15</p>
        <p className="border-bottom border-secondary text-muted mb-0">
          Where To: London, Uk
        </p>
        <h5 className="py-2 mb-0 d-flex justify-content-between">
          <span>Total</span> <span>${(+totalCount + 15).toFixed(2)}</span>
        </h5>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="bg-dark text-white p-3 my-4"
      >
        <div
          style={{ cursor: `pointer` }}
          className="d-flex align-items-start"
          onClick={() => {
            setTypeBilling(`direct-bank-transfer`);
          }}
        >
          {typeBilling === `direct-bank-transfer` ? (
            <IoMdRadioButtonOn className="mt-1" />
          ) : (
            <IoMdRadioButtonOff className="mt-1" />
          )}
          <div className="type-bill px-3 position-relative">
            <p className="text-uppercase fw-bold">Direct Bank transfer</p>
            <p
              className={`desc ${
                typeBilling === "direct-bank-transfer" ? "show" : ""
              }`}
            >
              Make your payment directly into our bank account
            </p>
          </div>
        </div>
        <div
          style={{ cursor: `pointer` }}
          className="type-bill d-flex align-items-start"
          onClick={() => {
            setTypeBilling(`Check-payment`);
          }}
        >
          {typeBilling === `Check-payment` ? (
            <IoMdRadioButtonOn className="mt-1" />
          ) : (
            <IoMdRadioButtonOff className="mt-1" />
          )}
          <div className="px-3 position-relative d-block">
            <p className="text-uppercase fw-bold">Check Payment</p>
            <p
              className={`desc
              ${typeBilling === "Check-payment" ? "show" : ""}
              `}
            >
              Make your payment directly into our bank account
            </p>
          </div>
        </div>
        <div
          style={{ cursor: `pointer` }}
          className="type-bill d-flex align-items-start"
          onClick={() => {
            setTypeBilling(`Cash-on-Delivery`);
          }}
        >
          {typeBilling === `Cash-on-Delivery` ? (
            <IoMdRadioButtonOn className="mt-1" />
          ) : (
            <IoMdRadioButtonOff className="mt-1" />
          )}
          <div className="px-3 position-relative d-block">
            <p className="text-uppercase fw-bold">Cash On Delivery</p>
            <p
              className={`desc
              ${typeBilling === "Cash-on-Delivery" ? "show" : ""}
              `}
            >
              Make your payment directly into our bank account
            </p>
          </div>
        </div>
      </motion.div>
      <Link to={`/Store-App/Confirm_checkout`} className="btn btn-secondary fw-bold py-2">
        Place Order
      </Link>
    </div>
  );
}

export default InfoBill;
