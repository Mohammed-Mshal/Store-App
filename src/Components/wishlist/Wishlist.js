import React from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../store/Slices/cart";
import { motion } from "framer-motion";
function Wishlist() {
  const wishlist = useSelector((state) => state.Wishlist);
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  console.log(wishlist);
  return (
    <div className="container-fluid container-md mx-auto py-5">
      <Table responsive>
        <thead className="bg-dark text-white text-uppercase">
          <tr>
            <th>Product</th>
            <th>price</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((ele,ind) => {
            return (
              <motion.tr
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: ind/2 }}
                key={ele.id}
              >
                <td className="d-flex align-items-center">
                  <img
                    src={ele.image}
                    alt="Image_For_Product"
                    className="img-fluid me-3"
                    style={{ maxHeight: "80px" }}
                  />
                  <p className="mb-0 fw-bold d-none d-md-block">
                    {ele.title.slice(0, 30) + `...`}
                  </p>
                </td>
                <td className="align-middle">
                  <p className="mb-0 fw-bold">${ele.price}</p>
                </td>
                <td className="align-middle">
                  {cart.indexOf(ele) === -1 ? (
                    <p className="fw-bold mb-0 text-success">In Stock</p>
                  ) : (
                    <p className="fw-bold mb-0 text-danger">Out of stock</p>
                  )}
                </td>
                <td className="align-middle text-end px-0">
                  <button
                    onClick={() => {
                      let found = false;
                      cart.map((element) => {
                        if (element.product.id === ele.id)
                          return (found = true);
                        else return null;
                      });
                      return (
                        found === false &&
                        dispatch(addProductToCart({ product: ele, count: 1 }))
                      );
                    }}
                    className="btn btn-outline-success mx-md-2 my-2 my-md-0 px-md-4 px-1"
                  >
                    Add To Cart
                  </button>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Wishlist;
