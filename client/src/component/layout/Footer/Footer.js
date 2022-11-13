import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import FooterLogo from "../../../images/footer.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD SHOPZO APP</h4>
        {/* <p>Download App for Android and IOS mobile phone</p> */}
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        {/* <h1>SHOPZO</h1> */}
        <div>
          <img className="footer-logo" src={FooterLogo} alt="Shopzo Logo" />
          <p>Your Shopping paradise</p>
        </div>
        <p className="copyrights">
          Copyrights 2022 &copy;
          <a
            className="profile-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://toufiq-alahi.netlify.app/"
          >
            Toufiq Alahi
          </a>
        </p>
      </div>

      <div className="rightFooter">
        <h4>Follow Shopzo</h4>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ToufiqAlahi"
        >
          GitHub
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/tigermate_/"
        >
          Instagram
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/toufiq-alahi/"
        >
          LinkedIn
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Toufiq.ThePandaScheme/"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
