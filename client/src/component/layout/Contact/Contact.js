import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:toufiqalahi81@gmail.com">
        <Button>
          Contact:
          <span id="mail">
            toufiqalahi<span>81</span>@gmail.com
          </span>
        </Button>
      </a>
    </div>
  );
};

export default Contact;
