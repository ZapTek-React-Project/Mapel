import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import HomeHeader from "../components/HomeHeader";
import Button from "../components/Button";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Card3 from "../components/Card3";
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import { NextButton } from "../components/Buttons";
import Card6 from "../components/Card6";
import { Carousel } from "../components/Carousel";
const Home = () => {
  return (
    <div className="relative h-[100vh]">
      <HomeHeader />
      <img
        src="https://cdn.prod.website-files.com/66eac2fd3c9f1f9db50ee072/6711fb56aec0b2a7f8069a92_hero.jpg"
        loading="lazy"
        alt="bg-pic"
        className="absolute top-0 right-0 left-0 h-full w-full -z-10 brightness-50"
      />

      <div className="text-discover text-white h-[90vh] flex flex-col items-center justify-center gap-10">
        <h2 className="text-6xl text-center font-serif">
          Discover wonderful homes <br /> that match your lifestyle
        </h2>

        <Button name="Explore Properties" color="white">
          <CgArrowTopRight size={20} />
        </Button>
      </div>

      <div className="my-8 mx-20 lg:mt-28">
        <div className="texts section">
          <div className="flex flex-row">
            <img src="houseicon.svg" alt="house icon" />
            <div className="px-2">EXCLUSIVE LISTINGS</div>
          </div>
          <hr className="bg-black" />
          <div className="my-3 text-2xl font-medium text-black">
            Popular Properties
          </div>
        </div>
        <div className=" lg:flex gap-10 ">
          <Card
            image={
              <img
                className=" w-80 h-72 lg:w-96 "
                src="IM1.jpg"
                alt="home image"
              />
            }
            button="For Sale"
            description="Luxury Waterfront Condo"
            cost="$1,250,000"
          />
          <Card
            image={
              <img
                className="w-80 h-72 lg:w-96"
                src="IM2.jpg"
                alt="home image"
              />
            }
            button="For Rent"
            description="Newly Built Family Home"
            cost="$1,750,000"
          />
          <Card
            image={
              <img
                className="w-80 h-72 lg:w-96"
                src="IM3.jpg"
                alt="home image"
              />
            }
            button="For Sale"
            description="Sunlit Condo with Views"
            cost="$7,500,000"
          />
        </div>
      </div>
      <div className="px-20 py-7 -bg--background mt-2 lg:flex gap-10 lg:mt-20 ">
        <div>
          <div className="w-80 h-96 pt-3 lg:w-auto lg:h-auto ">
            <img src="/6711f3b143e3f309af5ecd09_story-01-p-500.jpg" />
          </div>
          <div className="hidden lg:block mt-28">
            Our mission is to simplify the home-buying experience by providing
            top-notch <br /> service, trusted guidance, & a diverse range of
            high-quality properties. We’re <br /> here to help you find a space
            that truly feels like home.
          </div>
        </div>
        <div>
          <div>
            <div className="hidden lg:block">
              <p className="text-xl font-mono lg:text-4xl">
                Find Your Dream Home With Mapel
              </p>
              <p className="text-gray-800">
                We believe that finding your dream home should
                <br className="block lg:hidden" /> be a delightful experience.
                With a <br className="hidden lg:block" />
                commitment to
                <br className="block lg:hidden" /> excellence & a deep
                understanding of the real
                <br className="block lg:hidden" /> estate market, we strive{" "}
                <br className="hidden lg:block" />
                to simplify the home- <br className="block lg:hidden" />
                buying process for our clients
              </p>
            </div>
            <div className="  ml-2 pt-[40px] pb-[50px] hidden lg:block">
              <NextButton
                text={"About Us"}
                iconBlack={"/public/670d0c44934a34fca868597d_black-arrow.svg"}
                iconWhite={"/public/670d0bd0cf6b1850bb26a252_button-arrow.svg"}
              />
            </div>
            <div className="hidden lg:block">
              <img src="/HIDimage.jpg" alt="" className="lg:w-auto lg:h-auto" />
            </div>
          </div>

          <div className="block lg:hidden">
            <p className="text-xl font-mono">Find Your Dream Home With Mapel</p>
            <p className="text-gray-800">
              We believe that finding your dream home should
              <br /> be a delightful experience. With a commitment to <br />{" "}
              excellence & a deep understanding of the real
              <br /> estate market, we strive to simplify the home- <br />
              buying process for our clients
            </p>
          </div>
        </div>
        <div className="flex ml-2 pt-[40px] pb-[50px] sm:block lg:hidden">
          <NextButton
            text={"About Us"}
            iconBlack={"/public/670d0c44934a34fca868597d_black-arrow.svg"}
            iconWhite={"/public/670d0bd0cf6b1850bb26a252_button-arrow.svg"}
          />
        </div>
      </div>

      <div className="my-20 mx-10">
        <div>
          <div className="flex flex-row items-center">
            <img src="houseicon.svg" alt="house icon" />
            <div className="px-2">PROPERTY STYLES</div>
          </div>
          <hr className="bg-black" />
          <div className="my-3 text-2xl font-medium text-black lg:text-4xl">
            Discover Your Style
          </div>
        </div>
        <div className="grid grid-cols-2 lg:flex gap-5">
          <Card2
            picture={
              <img className="h-40 w-40 lg:w-60" src="IM5.jpg" alt="a house" />
            }
            tag="Luxury Rentals"
          />
          <Card2
            picture={
              <img className="h-40 w-40  lg:w-60" src="IM6.jpg" alt="a house" />
            }
            tag="City Townhouses"
          />
          <Card2
            picture={
              <img className="h-40 w-40  lg:w-60" src="IM7.jpg" alt="a house" />
            }
            tag="Modern Apartments"
          />
          <Card2
            picture={
              <img className="h-40 w-40  lg:w-60" src="IM8.jpg" alt="a house" />
            }
            tag="Industrial Spaces"
          />
          <Card2
            picture={
              <img className="h-40 w-40  lg:w-60" src="IM9.jpg" alt="a house" />
            }
            tag="Beachfront Villas"
          />
        </div>
      </div>
      <div className="-bg--background p-5 lg:grid grid-cols-3 grid-rows-2 gap-10">
        <div className="py-5 text-center">
          <div className="flex justify-center items-center">
            <div className="text-3xl text-black font-medium">100+</div>
            <div className="mx-2">
              <img className="" src="houseicon.svg" alt="house image" />
            </div>
          </div>
          <div className="text-gray-800 border-b border-gray-400">
            A diverse range of homes available
          </div>{" "}
        </div>
        <div className="py-5 text-center">
          <div className="flex justify-center items-center">
            <div className="text-3xl text-black font-medium">95%</div>
            <div className="mx-2">
              <img className="" src="happyface.svg" alt="house image" />
            </div>
          </div>
          <div className="text-gray-800 border-b border-gray-400">
            Happy clients are our top priority
          </div>{" "}
        </div>
        <div className="py-5 text-center">
          <div className="flex justify-center items-center">
            <div className="text-3xl text-black font-medium">50+</div>
            <div className="mx-2">
              <img className="" src="globe.svg" alt="house image" />
            </div>
          </div>
          <div className="text-gray-800 border-b border-gray-400">
            Explore neighborhoods across the area
          </div>
        </div>
        <div className="py-5 text-center">
          <div className="flex justify-center items-center">
            <div className="text-3xl text-black font-medium">75%</div>
            <div className="mx-2">
              <img className="" src="dollar.svg" alt="house image" />
            </div>
          </div>
          <div className="text-gray-800 border-b border-gray-400">
            Affordable options for every budget
          </div>
        </div>
        <div className="py-5 text-center">
          <div className="flex justify-center items-center">
            <div className="text-3xl text-black font-medium">15+</div>
            <div className="mx-2">
              <img className="" src="record.svg" alt="house image" />
            </div>
          </div>
          <div className="text-gray-800 border-b border-gray-400">
            Proven track record in real estate success
          </div>
        </div>
        <div className="py-5 text-center">
          <div className="flex justify-center items-center">
            <div className="text-3xl text-black font-medium">25%</div>
            <div className="mx-2">
              <img className="" src="graph.svg" alt="house image" />
            </div>
          </div>
          <div className="text-gray-800 border-b border-gray-400">
            Stay updated with comprehensive insights
          </div>
        </div>
      </div>

      <div className="my-20 mx-10">
        <div className="texts section">
          <div className="flex flex-row">
            <img src="houseicon.svg" alt="house icon" />
            <div className="px-2 uppercase">New Arrivals</div>
          </div>
          <hr className="bg-black" />
          <div className="my-3 text-2xl font-medium  text-black">
            Latest Properties
          </div>
        </div>
        <div className="mt-4 grid lg:grid-cols-3 grid-rows-2 gap-5">
          <Card3
            image={
              <img
                className="w-80 h-96 lg:w-full lg:h-full"
                src="H1.jpg"
                alt="room"
              />
            }
            button="For Sale"
            description="The Grand Residence"
            Location="New Jersey,USA"
            Price="$2,550,000"
          />
          <Card3
            image={
              <img
                className="w-80 h-96 lg:w-full lg:h-full"
                src="H3.jpg"
                alt="room"
              />
            }
            button="For Sale"
            description="Urban Chic Townhouse"
            Location="Los Angeles,USA"
            Price="$1,800,000"
          />
          <Card3
            image={
              <img
                className="w-80 h-96 lg:w-full lg:h-full"
                src="H2.jpg"
                alt="room"
              />
            }
            button="For Rent"
            description="Skyline View Apartment"
            Location="New York,USA"
            Price="$9,000,000"
          />
          <Card3
            image={
              <img
                className="w-80 h-96 lg:w-full lg:h-full"
                src="H4.jpg"
                alt="room"
              />
            }
            button="For Sale"
            description="The Factory Loft"
            Location="Carlifornia,USA"
            Price="$1,250,000"
          />
          <Card3
            image={
              <img
                className="w-80 h-96 lg:w-full lg:h-full"
                src="H5.jpg"
                alt="room"
              />
            }
            button="For Rent"
            description="Ocean Breeze Villa"
            Location="Dallas,USA"
            Price="$3,850,000"
          />
          <Card3
            image={
              <img
                className="w-80 h-96 lg:w-full lg:h-full"
                src="H6.jpg"
                alt="room"
              />
            }
            button="For Sale"
            description="The Penthouse Suite"
            Location="Miami,USA"
            Price="$2,250,000"
          />
        </div>

        <div className="flex ml-28 pt-[40px] pb-[50px] lg:flex justify-end lg:mr-12">
          <NextButton
            text={"View All Properties"}
            iconBlack={"/public/670d0c44934a34fca868597d_black-arrow.svg"}
            iconWhite={"/public/670d0bd0cf6b1850bb26a252_button-arrow.svg"}
          />
        </div>
      </div>
      <div className="slidesection -bg--background py-10 px-20">
        <div>
          <div className="flex flex-row pb-5 border-b border-white">
            <img src="houseicon.svg" alt="house icon" />
            <div className="px-2">TESTIMONIALS</div>
          </div>
          <div className="my-3 text-2xl font-medium text-black">
            Clients Reviews
          </div>
        </div>
        <div>
          {" "}
          <Carousel />{" "}
        </div>
      </div>

      <div className="p-10">
        <div>
          <div className="flex flex-row">
            <img src="houseicon.svg" alt="house icon" />
            <div className="px-2">OUR BLOGS</div>
          </div>
          <hr className="bg-black" />
          <div className="my-3 text-2xl font-medium text-black">
            Latest Articles
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-rows-3 gap-2">
          <Card6
            date="Oct 15,2024"
            Description={
              <>
                Unlocking the real estate market <br />
                top strategies for buyers
              </>
            }
            image={
              <img
                className="w-80 h-60 lg:w-auto lg:h-auto"
                src="IMG1.jpg"
                alt=""
              />
            }
            description={
              <>
                {" "}
                Discover how to navigate competitive
                <br /> markets, negotiate prices, and find hidden
                <br /> gems.
              </>
            }
          />
          <Card6
            date="Oct 15,2024"
            Description={
              <>
                Building a strong rental portfolio <br />
                what you need to know
              </>
            }
            image={
              <img
                className="w-80 h-60 lg:w-auto lg:h-auto"
                src="IMG2.jpg"
                alt=""
              />
            }
            description={
              <>
                {" "}
                Explore essential tips for building and
                <br /> managing a profitable rental property
                <br /> portfolio.
              </>
            }
          />
          <Card6
            date="Oct 15,2024"
            Description={
              <>
                Creating curb appeal simple
                <br /> upgrades for maximum impact
              </>
            }
            image={
              <img
                className="w-80 h-60 lg:w-auto lg:h-auto"
                src="IMG3.jpg"
                alt=""
              />
            }
            description={
              <>
                Elevate your home’s exterior appeal with <br />
                these easy and effective upgrades.
                <br /> <br />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
