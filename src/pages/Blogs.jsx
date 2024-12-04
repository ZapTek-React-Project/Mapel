import React from "react";
import MainHeader from "../components/MainHeader";
import "./Blog.css";
import Blog from "../components/Blogslayout";

const Blogs = () => {
  return (
    <div>
      <MainHeader />
      <div className="main px-20 py-10">
        <div className="flex gap-5 ">
          <div>
            <img src="/Servicesimages/homepic.svg" width={18} height={20} />
          </div>
          <p>OUR BLOGS</p>
        </div>
        <div className="text-2xl">
          <h1>Latest Articles</h1>
        </div>
        <div>
          <Blog />
          <div className="">
            <h3>Next</h3>
            <div className="">
              <img
                alt="Arrow"
                src="/Blogimages/black-arrow.svg"
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
