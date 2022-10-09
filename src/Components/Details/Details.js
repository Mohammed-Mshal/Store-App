import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { addProductToWishlist } from "../../store/Slices/wishlist";
import { addProductToCart } from "../../store/Slices/cart";
import Swal from "sweetalert2";

import "./details.css";

function Details(props) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.Wishlist);
  const cart = useSelector((state) => state.Cart);

  return (
    <div className="details_product py-5">
      <div className="container row mx-auto my-5 justify-content-center">
        <div className="col-lg-6 col-8 d-flex justify-content-center mb-3 mb-lg-0">
          <img
            src={props.product.image}
            className={`img-fluid`}
            alt="Image_for_Product"
          />
        </div>
        <div className="col-lg-6 col-10 text-center text-lg-start">
          <p className="text-muted">
            {props.product.category} / {props.product.title}
          </p>
          <h3>{props.product.title}</h3>
          <h3 className="text-success">${props.product.price}</h3>
          <h5>
            Quantity Available:
            <span className="text-muted"> {props.rating.count} Piece</span>
          </h5>
          <h5>
            Rate: <span className="text-muted">{props.rating.rate}</span>
          </h5>
          <div className="my-4 d-flex flex-column flex-sm-row justify-content-evenly justify-content-lg-start">
            <button
              onClick={() => {
                let found = false;
                cart.map((element) => {
                  if (element.product.id === props.product.id)
                    return (found = true);
                  else return null;
                });
                return (
                  found === false &&
                  dispatch(
                    addProductToCart({ product: props.product, count: 1 })
                  ) &&
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Order Add To Cart",
                    showConfirmButton: true,
                    customClass: {
                      confirmButton: "btn btn-success",
                    },
                    buttonsStyling: false,
                  })
                );
              }}
              className="btn btn-outline-success mx-md-2 my-2 my-md-0 px-4"
            >
              Add To Cart
            </button>
            <button
              onClick={
                wishlist.indexOf(props.product) === -1
                  ? () => {
                      dispatch(addProductToWishlist(props.product));
                      Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Order Add To Wishlist",
                        showConfirmButton: true,
                        customClass: {
                          confirmButton: "btn btn-success",
                        },
                        buttonsStyling: false,
                      });
                    }
                  : null
              }
              className="btn btn-outline-danger border_red me-md-2 my-2 my-md-0 px-4"
            >
              Add To Wishlist
            </button>
          </div>
          <Accordion alwaysOpen>
            <Accordion.Item eventKey="0" className="border_red my-2">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body className="px-md-4 px-2">
                {props.product.description}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="border_red my-2">
              <Accordion.Header>Reviews</Accordion.Header>
              <Accordion.Body className="bg-light px-0 d-flex flex-column align-items-start">
                <h6 className="px-4 py-2 bg-dark text-white">
                  -ANDREW STOCKTON
                </h6>
                <p className="px-md-4 px-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Details;
