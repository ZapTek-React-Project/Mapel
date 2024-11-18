import React from "react";
import MainHeader from "../components/MainHeader";
import { PropertyCard } from "../components/PropertyCard";
import { Link } from "react-router-dom";
import { NextButton } from "../components/Buttons";
import { FAQSection } from "../components/FAQSection";

const Properties = () => {
  return (
    <>
      <nav>
        <MainHeader />
      </nav>
      <main className="flex flex-col items-center font">
        <section className="w-[90%] CategoriesSectionPage-1">
          <div className="flex flex-col gap-[5px] py-[40px]">
            <div className="flex gap-[10px] items-center">
              <img
                src="/public/670df50b1b9142294387b0b9_ic-title.svg"
                width={25}
              />
              <h2 className="text-[16px] -text--body">NEW ARRIVALS</h2>
            </div>
            <div>
              <h1 className="text-[32px] md:font-[38px] font-semibold">
                Latest Properties
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[20px]">
            <PropertyCard
              src={"/6710afda61826c79e647bcd1_property-thumb-01.jpg"}
              name={"The Grand Residence"}
              location={"New Jersey, USA"}
              price={"$2,550,000"}
              availability={"For Sale"}
            />
            <PropertyCard
              src={"/public/6710b3838e373637b33a07b4_property-thumb-02.jpg"}
              name={"Urban Townhouse"}
              location={"Los Angeles, USA"}
              price={"$1,800,000"}
              availability={"For Sale"}
            />
            <PropertyCard
              src={"/public/6710b444493442e7921b085d_property-thumb-03.jpg"}
              name={"Skyline View Apartment"}
              location={"New York, USA"}
              price={"$9,000,000"}
              availability={"For Rent"}
            />
            <PropertyCard
              src={"/public/6710b4d383232f1764c14876_property-thumb-04.jpg"}
              name={"The Factory Loft"}
              location={"California, USA"}
              price={"$1,250,000"}
              availability={"For Sale"}
            />
            <PropertyCard
              src={"/public/6710b509ec104a5c2acfcb4f_property-thumb-05.jpg"}
              name={"Ocean Breeze Villa"}
              location={"Dallas, USA"}
              price={"$3,850,000"}
              availability={"For Rent"}
            />
            <PropertyCard
              src={"/public/6710b624f56ded5147112b07_property-thumb-06.jpg"}
              name={"Penthouse Suite"}
              location={"Miami, USA"}
              price={"$2,250,000"}
              availability={"For Sale"}
            />
          </div>
          <div className="flex justify-end pt-[40px] pb-[50px]">
            <NextButton
              text={"Next"}
              iconBlack={"/public/670d0c44934a34fca868597d_black-arrow.svg"}
              iconWhite={"/public/670d0bd0cf6b1850bb26a252_button-arrow.svg"}
            />
          </div>
        </section>

        <section className="FAQSection w-[90%]">
          <FAQSection />
        </section>
      </main>
    </>
  );
};

export default Properties;
