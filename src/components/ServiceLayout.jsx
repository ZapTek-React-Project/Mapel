import React from "react";
import "/src/pages/Services.css";

const ServiceLayout = () => {
  return (
    <div className="">
      <div className="px-20 grid grid-cols-3 gap-5">
        <div className="">
          <div className="">
            <img
              src="/Servicesimages/newconstruction.svg"
              alt="construction icon"
              className=""
            />
            <img
              src="/Servicesimages/constructionactual.jpg"
              alt="construction image"
              className=""
            />
            <div className="content">
              <h3>New Construction</h3>
              <div className="view">
                <div> View Service</div>
                <div className="">
                  <img
                    alt="Arrow"
                    src="/Servicesimages/arrow.svg"
                    class=""
                  />
                  <img
                    alt="Arrow"
                    src="/Servicesimages/arrow.svg"
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-card">
          <div className="card">
            <div className="image-container">
              <img
                src="/Servicesimages/commercialicon.svg"
                alt="commercial icon"
                className="icon"
              />
              <img
                src="/Servicesimages/commercialactual.jpg"
                alt="commercial image"
                className=""
              />
              <div className="content">
                <h3>Commercial Real Estate</h3>
                <div className="view">
                  <div> View Service</div>
                  <div className="arrow-button-wrap">
                    <img
                      alt="Arrow"
                      src="/Servicesimages/arrow.svg"
                      class=""
                    />
                    <img
                      alt="Arrow"
                      src="/Servicesimages/arrow.svg"
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="">
              <img
                src="/Servicesimages/relocationicon.svg"
                alt="relocation icon"
                className=""
              />
              <img
                src="/Servicesimages/relocationactual.jpg"
                alt="relocation image"
                className=""
              />
              <div className="">
                <h3>Relocation Services</h3>
                <div className="">
                  <div> View Service</div>
                  <div className="">
                    <img
                      alt="Arrow"
                      src="/Servicesimages/arrow.svg"
                      class=""
                    />
                    <img
                      alt="Arrow"
                      src="/Servicesimages/arrow.svg"
                      class=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <img
              src="/Servicesimages/interioricon.svg"
              alt="interior icon"
              className=""
            />
            <img
              src="/Servicesimages/interioractual.jpg"
              alt="interior image"
              className=""
            />
            <div className="">
              <h3>Interior Design</h3>
              <div className="">
                <div> View Service</div>
                <div className="arrow-button-wrap">
                  <img
                    alt="Arrow"
                    src="/Servicesimages/arrow.svg"
                    class="arrow-button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-card">
          <div className="image-container">
            <img
              src="/Servicesimages/inspectionicon.svg"
              alt="interior icon"
              className="icon"
            />
            <img
              src="/Servicesimages/inspectionactual.jpg"
              alt="inspection image"
              className="main"
            />
            <div className="content">
              <h3>Home Inspection</h3>
              <div className="view">
                <div> View Service</div>
                <div className="arrow-button-wrap">
                  <img
                    alt="Arrow"
                    src="/Servicesimages/arrow.svg"
                    class="arrow-button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-card">
          <div className="image-container">
            <img
              src="/Servicesimages/propertyicon.svg"
              alt="management icon"
              className="icon"
            />
            <img
              src="/Servicesimages/propertyicon.jpg"
              alt="management image"
              className="main"
            />
            <div className="content">
              <h3>Property Management </h3>
              <div className="view">
                <div> View Service</div>
                <div className="arrow-button-wrap">
                  <img
                    alt="Arrow"
                    src="/Servicesimages/arrow.svg"
                    class="arrow-button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceLayout;
