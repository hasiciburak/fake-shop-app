import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  
  return (
    <div className="ui grid contianer">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
