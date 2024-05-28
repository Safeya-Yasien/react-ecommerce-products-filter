import React from "react";

import Img1 from "./imgs/img-1.jpg";
import Img2 from "./imgs/img-2.jpg";
import Img3 from "./imgs/img-3.jpg";

const Home = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Img1} className="d-block w-100" alt="" />
        </div>
        <div className="carousel-item">
          <img src={Img2} className="d-block w-100" alt="img-2" />
        </div>
        <div className="carousel-item">
          <img src={Img3} className="d-block w-100" alt="img-3" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Home;
