import React from "react";
import CartProduct from "../cart-product/CartProduct";
import { Link } from "react-router-dom";

function OurProducts(props) {
  return (
    <div className="our_products py-5">
      <div className="container text-center">
        <h2 className="text-center">Our Products</h2>
        <div className="d-flex flex-wrap justify-content-between">
          {props.products.length > 0 &&
            props.products.map((ele, ind) => {
              return (
                ind < 8 && (
                  <CartProduct
                    key={ele.id}
                    id={ele.id}
                    image={ele.image}
                    title={ele.title}
                    price={ele.price}
                    slug={ele.description}
                  />
                )
              );
            })}
        </div>
        <Link to={`/Store-App/shop/all-products`} className="btn btn-secondary px-5 mt-3">
          Show More
        </Link>
      </div>
    </div>
  );
}

export default OurProducts;
