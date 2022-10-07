import React, { useEffect, useState } from "react";
import OurProducts from "../ourProducts/OurProducts";

function OtherProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="other_products">
      <OurProducts products={products} />
    </div>
  );
}

export default OtherProduct;
