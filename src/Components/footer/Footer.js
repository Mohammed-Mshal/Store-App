import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import "./footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-dark">
      <div className="container py-5">
        <ul
          className="list-footer row flex-column-reverse flex-md-row justify-content-between list-unstyled"
          style={{ borderBottom: `2px solid #ef3636` }}
        >
          <li className="text-white d-flex flex-column col-lg-3 col-md-4 col-sm-6 col-12  mx-auto text-center text-md-start mt-5 mt-md-0">
            <h2 className="mb-4">Store App</h2>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="d-flex justify-content-start fs-3 my-4">
              <a href="facebook" className="me-auto ms-auto ms-md-0">
                <FaFacebookF className=" text-white" />
              </a>
              <a href="instagram" className="mx-auto  ms-md-0">
                <FaInstagram className="mx-auto text-white" />
              </a>
              <a href="twitter" className="mx-auto ms-auto ms-md-0">
                <FaTwitter className=" text-white" />
              </a>
            </div>
          </li>
          <li className="text-white d-flex flex-column text-uppercase col-lg-3 col-md-4 col-sm-6 col-12   mx-auto text-center text-md-start">
            <h5 className="text_red">INFORMATION</h5>
            <ul className="list-unstyled">
              <li className="my-4">
                <Link to={`/Store-App/about`} className="text-white text-decoration-none">
                  About Store App
                </Link>
              </li>
              <li className="my-4">
                <a href="#FAQ" className="text-white text-decoration-none">
                  FAQ
                </a>
              </li>
              <li className="my-4">
                <Link to={`/Store-App/contact`} className="text-white text-decoration-none">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </li>
          <li className="text-white d-flex flex-column text-uppercase  mx-auto col-lg-3 col-md-4 col-sm-6 col-12 text-center text-md-start">
            <h5 className="text_red">QUICK LINKS</h5>
            <ul className="list-unstyled">
              <li className="my-4">
                <Link to={`/Store-App/wishlist`} className="text-white text-decoration-none">
                  Wishlist
                </Link>
              </li>
              <li className="my-4">
                <Link to={`/Store-App/proceed-checkout`} className="text-white text-decoration-none">
                  Checkout
                </Link>
              </li>
              <li className="my-4">
                <Link to={`/Store-App/shopping-cart`} className="text-white text-decoration-none">
                  cart
                </Link>
              </li>
            </ul>
          </li>
          <li className="text-white d-flex flex-column  col-lg-3 col-md-4 col-sm-6 col-12 text-center text-md-start mx-auto">
            <h5 className="text_red text-center text-md-start">CONTACT US</h5>
            <ul className="list-unstyled">
              <li className="my-4">
                <FiMapPin className="fs-3 me-2 text_red" />
                2715 Ash Dr.San Jose
              </li>
              <li className="my-4">
                <BsTelephoneFill className="fs-3 me-2 text_red" />
                (808) 555-0111
              </li>
              <li className="my-4">
                <FiMail className="fs-3 me-2 text_red" />
                StoreApp.contacts@example.com
              </li>
            </ul>
          </li>
        </ul>
        <div className="fw-bold d-flex justify-content-between text-white">
          <p>COPYRIGHT &copy; 2022 MOHAMMED MSHAL</p>
          <p>ALL RIGHT RESERVED</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
