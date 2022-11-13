import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import MetaData from "../layout/MetaData";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

// const products = { // * Dummy Data
//   name: "Green Suit",
//   images: [
//     {
//       url: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?&w=220&q=50",
//     },
//   ],
//   price: "$7000",
//   _id: "Toufiq",
// };

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch , error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="SHOPZO" />

          <div className="banner">
            <p>Welcome to SHOPZO</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
