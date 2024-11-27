import React from "react";
import "/src/pages/Services.css";
const Testimonial = () => {
  return (
    <div className="testimonials">
      <div className="review-title">
        <img src="/Servicesimages/homepic.svg" width={18} height={20} />
        <div>
          <h4>TESTIMONIALS</h4>
        </div>
      </div>
      <hr className="thin-line"></hr>
      <div className="review-subtitle">
        <h1>Clients Review</h1>
      </div>
      <div className="reviews">
        <div className="testi-content  ">
          <div className="slide  ">
            <img
              src="/Servicesimages/darlenereview.jpg"
              width={300}
              height={300}
            />
            <div className="test-box">
              <h4>Our Dream Home Became a Reality!</h4>
              <p>
                The team at Mapel helped us find a home that we had only ever
                imagined. We were very particular about the kind of property we
                wanted and had high expectations, but Mapel delivered beyond
                what we thought was possible. Their commitment to finding the
                right home for us was evident in every interaction. Even after
                we moved in, they stayed in touch to ensure everything was
                perfect. We’re incredibly grateful for their efforts and will
                always remember this positive experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
