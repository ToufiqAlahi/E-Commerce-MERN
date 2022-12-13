import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import FooterLogo from "../../../images/footer.svg";
import windowsStore from "../../../images/Windows-Store.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-box">
      <div id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD SHOPZO APP</h4>
          <a
            className="store-logo"
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={playStore} alt="playstore" />
          </a>

          <a
            className="store-logo"
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={appStore} alt="Appstore" />
          </a>
          <a
            className="store-logo"
            href="https://apps.microsoft.com/store/apps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={windowsStore} alt="Appstore" />
          </a>
          <br />
        </div>

        <div className="midFooter">
          <div>
            <img className="footer-logo" src={FooterLogo} alt="Shopzo Logo" />
            <p>Your Shopping paradise</p>
          </div>
        </div>

        <div className="rightFooter">
          <h4>Follow Shopzo</h4>
          <a
            className="link link_bg link-animation"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ToufiqAlahi"
          >
            <span className="link__label social-link">GitHub</span>
          </a>
          <a
            className="link link_bg link-animation"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/tigermate_/"
          >
            <span className="link__label social-link">Instagram</span>
          </a>
          <a
            className="link link_bg link-animation"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/toufiq-alahi/"
          >
            <span className="link__label social-link">LinkedIn</span>
          </a>
          <a
            className="link link_bg link-animation"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/Toufiq.ThePandaScheme/"
          >
            <span className="link__label social-link">Facebook</span>
          </a>
        </div>
      </div>

      <div className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
            <div className="footer_bg_three" />
          </div>
        </div>
        <div className="footer_bottom">
          <div className="bottom-text">
            <div>
              <p>
                Copyrights 2022 - 2023 &copy;ShopZo Inc. by
                <a
                  className="link portfolio-link link_bg link-animation"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://toufiq-alahi.netlify.app/"
                >
                  <span className="link__label">
                    Toufiq Alahi
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 72 72"
                      >
                        <path
                          className="link-svg"
                          d="M 43 12 C 40.791 12 39 13.791 39 16 C 39 18.209 40.791 20 43 20 L 46.34375 20 L 35.171875 31.171875 C 33.609875 32.733875 33.609875 35.266125 35.171875 36.828125 C 35.951875 37.608125 36.977 38 38 38 C 39.023 38 40.048125 37.608125 40.828125 36.828125 L 52 25.65625 L 52 29 C 52 31.209 53.791 33 56 33 C 58.209 33 60 31.209 60 29 L 60 16 C 60 13.791 58.209 12 56 12 L 43 12 z M 23 14 C 18.037 14 14 18.038 14 23 L 14 49 C 14 53.962 18.037 58 23 58 L 49 58 C 53.963 58 58 53.962 58 49 L 58 41 C 58 38.791 56.209 37 54 37 C 51.791 37 50 38.791 50 41 L 50 49 C 50 49.551 49.552 50 49 50 L 23 50 C 22.448 50 22 49.551 22 49 L 22 23 C 22 22.449 22.448 22 23 22 L 31 22 C 33.209 22 35 20.209 35 18 C 35 15.791 33.209 14 31 14 L 23 14 z"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </a>
                All rights reserved.
              </p>
            </div>

            <div className="project-link project-link">
              <a
                className="link link_bg link-animation"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ToufiqAlahi/E-Commerce-MERN"
              >
                <span className="link__label">
                  Project Link (GitHub)
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="30"
                      height="30"
                      viewBox="0 0 72 72"
                    >
                      <path
                        className="link-svg"
                        d="M 43 12 C 40.791 12 39 13.791 39 16 C 39 18.209 40.791 20 43 20 L 46.34375 20 L 35.171875 31.171875 C 33.609875 32.733875 33.609875 35.266125 35.171875 36.828125 C 35.951875 37.608125 36.977 38 38 38 C 39.023 38 40.048125 37.608125 40.828125 36.828125 L 52 25.65625 L 52 29 C 52 31.209 53.791 33 56 33 C 58.209 33 60 31.209 60 29 L 60 16 C 60 13.791 58.209 12 56 12 L 43 12 z M 23 14 C 18.037 14 14 18.038 14 23 L 14 49 C 14 53.962 18.037 58 23 58 L 49 58 C 53.963 58 58 53.962 58 49 L 58 41 C 58 38.791 56.209 37 54 37 C 51.791 37 50 38.791 50 41 L 50 49 C 50 49.551 49.552 50 49 50 L 23 50 C 22.448 50 22 49.551 22 49 L 22 23 C 22 22.449 22.448 22 23 22 L 31 22 C 33.209 22 35 20.209 35 18 C 35 15.791 33.209 14 31 14 L 23 14 z"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    // </div>
  );
};

export default Footer;
