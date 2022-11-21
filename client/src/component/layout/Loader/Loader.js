import React from "react";
import "./module.Loader.css";

const Loader = () => {
  return (
    <div class="load-main">
      <div class="load-container loading">
        <div class=" loading-overlay"></div>
        <div class="loading-anim">
          <div class="border out"></div>
          <div class="border in"></div>
          <div class="border mid"></div>
          <div class="circle">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
