import React from "react";
import MainHeader from "../components/MainHeader";
import "./Services.css";
import ServiceLayout from "../components/ServiceLayout";
import FAQ from "../components/FAQ";
import Testimonial from "../components/Testimonials";
const Services = () => {
  return (
    <div>
      <MainHeader />
      <div className="sub-title">
        <div>
          <img src="/Servicesimages/homepic.svg" width={18} height={20} />
        </div>
        <div>WHAT WE DO</div>
      </div>
      <h1 className="sub">Our Services</h1>
      <ServiceLayout />
      <Testimonial />
      <FAQ />
    </div>
  );
};

export default Services;
