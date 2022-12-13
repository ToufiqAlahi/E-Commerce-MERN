import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
import logo from "../../../images/logo.png";

const options = {
  burgerColorHover: "#5428d5",
  logo,
  logoWidth: "20vmax",
  navColor1: "#b8a9eb",
  logoHoverSize: "20px",
  logoHoverColor: "#5428d5",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "gold",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColorHover: "gold",
  searchIconColorHover: "gold",
  cartIconColorHover: "gold",
  cartIconMargin: "1vmax",
  profileIcon: true,
  profileIconColor: "rgba(35, 35, 35,0.8)",
  ProfileIconElement: MdAccountCircle,
  searchIcon: true,
  searchIconColor: "rgba(35, 35, 35,0.8)",
  SearchIconElement: MdSearch,
  cartIcon: true,
  cartIconColor: "rgba(35, 35, 35,0.8)",
  CartIconElement: MdAddShoppingCart,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
