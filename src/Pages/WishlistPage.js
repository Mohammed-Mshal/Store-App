import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Empty from "../Components/Empty/Empty";
import HeaderSection from "../Components/headerSection/HeaderSection";
import Wishlist from "../Components/wishlist/Wishlist";
import { motion } from "framer-motion";
import { containerVariants } from "../animation/variants";

function WishlistPage() {
  const wishlists = useSelector((state) => state.Wishlist);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="wishlist_page"
    >
      <HeaderSection page={`Wishlist`} background={`wishlist_page`} />
      {wishlists.length === 0 ? <Empty typePage={`Wishlist`} /> : <Wishlist />}
      <div className="d-flex justify-content-center pt-4 pb-5">
        <Link
          to={`/Store-App/shop/all-products`}
          className="btn btn-secondary mb-5 px-5 py-2"
        >
          Back TO SHOP
        </Link>
      </div>
    </motion.div>
  );
}

export default WishlistPage;
