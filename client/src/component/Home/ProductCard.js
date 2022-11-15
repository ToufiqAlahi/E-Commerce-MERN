import React from "react";
import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
import { Rating } from "@material-ui/lab";
import { productsReducer } from "../../reducers/productReducer";

const ProductsCard = ({ product }) => {
  const options = {
    edit: "false",
    color: "rgba(20,20,20,0.3)",
    activeColor: "gold",
    value: product.ratings,
    isHalf: true,
  };
  
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>

      <div>
        <Rating {...options} />
        <span className="productsCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>${product.price}</span>
    </Link>
  );
};

export default ProductsCard;