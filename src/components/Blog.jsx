import React from "react";

const Blog = ({date, header, imgUrl,details}) => {
  return (
    <div className="blog-box">
      <div className="content-heading">
        <div className="date"> Oct 15,2024</div>
        <h3>Unlocking the real estate market top strategies for buyers</h3>
      </div>
      <div className="blog-img">
        <img src="/Blogimages/blogpic1.jpg" width={400} height={400} />
      </div>
      <div className="under-pic">
        <p>
          Discover how to navigate repetitive markets,negotiate prices and find
          hidden gems
        </p>
        <div className="read">
          <div>
            <h6> Read Articles</h6>
          </div>
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

export default Blog;
