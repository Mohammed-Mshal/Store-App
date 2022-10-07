import React, { useEffect, useState } from "react";
import HeaderSection from "../Components/headerSection/HeaderSection";
import Details from "../Components/Details/Details";
import OtherProduct from "../Components/Other-Product/OtherProduct";
import { useParams } from "react-router";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";


function ShoppingProduct() {
  const param = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/${param.idProduct}`
      );
      const data = await res.json();
      setProduct(data);
      setRating(data.rating);
    };
    getProduct();
  }, [param]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="view_product"
    >
      <HeaderSection page={`SHOP`} background={`header_shop_product`} />
      <Details rating={rating} product={product} />
      <OtherProduct />
    </motion.div>
  );
}

export default ShoppingProduct;
