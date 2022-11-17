import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const About = () => {
  const visitLinkedIn = () => {
    window.location = "https://toufiq-alahi.netlify.app/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dkzygdfuu/image/upload/v1668682516/author/toufiqAlahi.jpg"
              alt="Founder"
            />
            <Typography>Toufiq Alahi</Typography>
            <Button onClick={visitLinkedIn} color="primary">
              Visit My Portfolio Website
            </Button>

            <span>
              ShopZo, an E-commerce website was built with MERN stack (MongoDB,
              Express, React, Node). The frontend is built using Redux, and
              React, CSS. The backend is built using Express - js, MongoDB, and
              Mongoose for database management. For password encryption, I have
              used the bcrypt library, a hashing algorithm to encrypt passwords.
            </span>
          </div>

          <div className="aboutSectionContainer2 ">
            <Typography component="h2">Our Brands</Typography>

            <div class="hover-effect1">
              <ul className="grid">
                <li>
                  <a href="https://github.com/ToufiqAlahi" title="GitHub">
                    <GitHubIcon className="githubSvgIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tigermate_/"
                    title="Instagram"
                  >
                    <InstagramIcon className="instagramSvgIcon" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/toufiq-alahi/"
                    title="LinkedIn"
                  >
                    <LinkedInIcon className="linkedInSvgIcon" />
                  </a>
                </li>
              </ul>
            </div>

            {/* dfsggggggggggggggggggg */}
            {/* dfsggggggggggggggggggg */}
            {/* dfsggggggggggggggggggg */}
            {/* dfsggggggggggggggggggg */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
