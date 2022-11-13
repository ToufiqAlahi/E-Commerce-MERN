import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductsCard = ({ products }) => {
  const options = {
    edit: "false",
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: 3.5,
    isHalf: true,
  };

  return (
    <Link className="productsCard" to={products._id}>
      <img src={products.images[0].url} alt={products.name} />
      <p>{products.name}</p>

      <div>
        <ReactStars {...options} />
        <span className="productsCardSpan">(188 Reviews)</span>
      </div>
      <span>{products.price}</span>
    </Link>
  );
};

export default ProductsCard;
