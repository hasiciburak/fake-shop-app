import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    return (
      <div
        className="four column wide fixed"
        style={{ marginTop: "50px" }}
        key={product.id}
      >
        <div className="ui link cards">
          <div className="ui card">
            <div className="image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <div className="header">{product.title}</div>
              <div className="meta price">{product.price}</div>
              <div className="meta">{product.category}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="ui five column grid">{renderList}</div>
    </>
  );

  // const { id, title } = products[0];
};;

export default ProductComponent;
