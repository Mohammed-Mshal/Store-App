import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CartProduct(props) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0, scale: 0.8 }}
      whileInView={{ y: 0, opacity: 1, scale: 1 }}
      transition={{duration:.5}}
      style={{ width: "18rem" }}
      className={`card my-3 border-0 mx-auto `}
    >
      <Card.Img variant="top" src={props.image} style={{ height: `300px` }} />
      <Card.Body className="text-center d-flex flex-column justify-content-end align-items-center">
        <Card.Title>{props.title}</Card.Title>
        <p className="text_red fw-bolder">${props.price}</p>
        <Link to={`/products/${props.id}`} className="btn btn-dark">
          View Product
        </Link>
      </Card.Body>
    </motion.div>
  );
}

export default CartProduct;
