import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all";
import MetaData from "../layout/MetaData";
import "./Home.css";
import ProductCard from "./ProductCard.js";

const Home = () => {
  const products = {
    name: "Green Suit",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?&w=220&q=50",
      },
    ],
    price: "$7000",
    _id: "Toufiq",
  };

  return (
    <Fragment>
      <MetaData title="Home page is working" />

      <div className="banner">
        <p>Welcome to Shopzo</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
        <ProductCard products={products} />
      </div>
    </Fragment>
  );
};

export default Home;
