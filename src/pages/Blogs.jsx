import React from "react";
import MainHeader from "../components/MainHeader";
import "./Blog.css";
import Blog from "../components/Blogslayout";

const Blogs = () => {
  return (
    <div>
      <MainHeader />
      <div className="title">
        <div>
          <img src="/Servicesimages/homepic.svg" width={18} height={20} />
        </div>
        <div>OUR BLOGS</div>
      </div>
      <div className="latest">
        <h1>Latest Articles</h1>
      </div>
      <div>
        <Blog />
        <div className="next-btn">
          <h3>Next</h3>
          <div className="arrow-button-wrap">
            <img
              alt="Arrow"
              src="/Blogimages/black-arrow.svg"
              class="arrow-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
