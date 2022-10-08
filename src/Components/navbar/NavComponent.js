import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function NavComponent() {
  const numProduct = useSelector((state) => state.Cart);
  const numProductInWishlist = useSelector((state) => state.Wishlist);
  return (
    <Navbar
      collapseOnSelect
      sticky="top"
      expand="lg"
      bg="light"
      variant="light"
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="container"
      >
        <Navbar.Brand>
          <Link to="/Store-App/" className="text-dark text-decoration-none fs-3">
            Store App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5">
            <Link
              to="/Store-App/"
              className="text-dark text-decoration-none mx-lg-3 mx-auto my-2 my-lg-0"
            >
              Home
            </Link>
            <Link
              to="/Store-App/shop/all-products"
              className="text-dark text-decoration-none mx-lg-3 mx-auto my-2 my-lg-0"
            >
              Shop
            </Link>
            <Link
              to="/Store-App/about"
              className="text-dark text-decoration-none mx-lg-3 mx-auto my-2 my-lg-0"
            >
              About
            </Link>
            <Link
              to="/Store-App/contact"
              className="text-dark text-decoration-none mx-lg-3 mx-auto my-2 my-lg-0"
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto fs-5 d-flex flex-row justify-content-center">
            <Link
              to="/Store-App/shopping-cart"
              className="text-dark text-decoration-none mx-2 my-2 my-lg-0 position-relative"
            >
              <FiShoppingCart />
              {numProduct.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1, 1.2, 1] }}
                  className="notification position-absolute bg_red text-white rounded-pill"
                  style={{
                    fontSize: "12px",
                    padding: "2px 8px",
                    top: "60%",
                    right: "50%",
                  }}
                >
                  {numProduct.length}
                </motion.span>
              )}
            </Link>
            <Link
              to="/Store-App/wishlist"
              className="text-dark text-decoration-none mx-2 my-2 my-lg-0 position-relative"
            >
              <AiOutlineHeart />
              {numProductInWishlist.length > 0 && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: [1, 1.2, 1, 1.2, 1] }}
                  className="notification position-absolute bg_red text-white rounded-pill"
                  style={{
                    fontSize: "12px",
                    padding: "2px 8px",
                    top: "60%",
                    right: "50%",
                  }}
                >
                  {numProductInWishlist.length}
                </motion.span>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </motion.div>
    </Navbar>
  );
}

export default NavComponent;
