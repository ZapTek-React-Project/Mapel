import React from "react";
import MainHeader from "../components/MainHeader";
import Card4 from "../components/Card4";
import Card5 from "../components/Card5";
import { Carousel } from "../components/Carousel";
import { FAQSection } from "../components/FAQSection";

const About = () => {
  return (
    <div>
      <MainHeader />
      <div className="mt-8 mx-4 lg:mt-16 lg:mx-4">
        <div className="flex">
          <img src="houseicon.svg" alt="house icon" className="mx-1" />
          <div className="uppercase px-3 font-mono text-gray-700">Who We Are</div>
        </div>
        <div className="text-4xl font-medium lg:text-5xl">About us</div>
      </div>
      <div className="mx-1 mt-8 mb-8 lg:mt-20  lg:flex justify-between ">
       <div className="lg: flex flex-col"> 
        <div className="hidden lg:block">
          <img src="/6711eb9a82d5581d97ded585_about-01-p-500.jpg" alt="" className="w-72 h-96"/>
        </div>
        <div className="hidden lg:block text-gray-700 mt-7">
        We believe that finding a home is more<br/> than just a transaction—it’s a milestone <br/>that should be celebrated.
        </div>
        </div>
        <div className="lg:flex mx-5">
          <div classname="">
          <img classname="" src="AboutImage1.jpg" alt="" />
        </div>
        <div className="mx-5">
        <div class="mt-5">
          <div className="text-xl text-gray-900 lg:text-2xl">
            Where we redefine real estate by <br/>
            turning your property dreams into<br/> reality.
          </div>
          <div className="text-customsize text-gray-800 mt-5 mb-5">
            Where your journey to finding the perfect home<br/> begins. We
            believe that every individual deserves a<br/> space that reflects
            their unique identity and meets<br/> their needs.
          </div>
        </div>
        <div class="flex lg:mt-24">
          <div className="border bg- -bg--background px-9 py-3 lg:px-10 lg:py-9">
            <section className="text-center">
              <div className="text-2xl lg:text-4xl">47+</div>
            <div>On-Going Projects</div>
            </section>
          </div>
          <div class="mx-3 border bg- -bg--background px-7 py-3 lg:px-10 lg:py-9 ">
           <section className="text-center"> 
            <div className="text-2xl lg:text-4xl">148+</div>
            <div>Projects Completed</div>
            </section>
          </div>
        </div>
        </div>
        </div>
      </div>
      <div className="lg:mt-36">
        <div className="mt-8 mx-4">
          <div className="flex">
            <img src="houseicon.svg" alt="house icon" className="" />
            <div className="uppercase px-3 font-mono">Who We Are</div>
          </div> <hr/>
          <div className="text-3xl font-medium lg:text-4xl">Our Services</div>
        </div>
        <div className="">
          <Card4
            num='1'
            image={<img src="estateicon.svg" alt="" classname="" />}
            about="Commercial Real Estate"
            description={
              <>
                Commercial real estate encompasses properties used for <br />
                business purposes, such as offices,retail spaces, and <br />{" "}
                more.
              </>
            }
            pic={<img src="estateicon.svg" alt="" classname="" />}
          />
          <Card4
            num='2'
            image={<img src="tools.svg" alt="" classname="" />}
            about="Relocation Services"
            description={
              <>
                It involves a thorough assessment of a home's condition,
                <br />
                identifying potential issues or needed repairs.
              </>
            }
            pic={<img src="tools.svg" alt="" classname="" />}
          />
          <Card4
            num='3'
            image={<img src="design.svg" alt="" classname="" />}
            about="Interior Design"
            description={
              <>
                Streamline your move with our comprehensive relocation
                <br />
                services with moving of individuals of families.
              </>
            }
            pic={<img src="design.svg" alt="" classname="" />}
          />
          <Card4
            num='4'
            image={<img src="measure.svg" alt="" classname="" />}
            about="Home Inspections"
            description={
              <>
                Property management involves overseeing and maintaining
                <br />
                real estate assets on behalf of property owners.
              </>
            }
            pic={<img src="measure.svg" alt="" classname="" />}
          />
          <Card4
            num='5'
            image={<img src="serviceicon.svg" alt="" classname="" />}
            about="Property Management"
            description={
              <>
                Land acquisition involves the process of acquiring parcels
                <br />
                of land for various purposes, such as development, or
                <br />
                conservation.
              </>
            }
            pic={<img src="serviceicon.svg" alt="" classname="" />}
          />
          <Card4
            num='6'
            image={<img src="constructionicon.svg" alt="" classname="" />}
            about="New Construction"
            description={
              <>
                It involves planning, designing, and executing the
                <br />
                construction of a brand-new building or development.
              </>
            }
            pic={<img src="constructionicon.svg" alt="" classname="" />}
          />
        </div>
      </div>
      <div className="mt-20 mb-16">
        <div className="mx-3 mb-4 text-xl font-semibold lg:text-3xl">
       <h3> At Mapel, we believe in giving back <br/> to the communities we serve</h3>
        </div>
        <div className="lg:flex">
          <div className="hidden lg:block">
            <img src="IMAGEE.jpg" alt="image" className="w-auto h-auto"/>
            </div>
          <div className="mx-3">
            <div>
              <p className="text-xl font-mono">Our Mission</p>
              Our mission at Mapel is clear to empower you to find the <br/>perfect home that aligns 
              with your lifestyle & aspirations.<br/> <br/>
              Our commitment to customer satisfaction means we are <br/>always available to 
              answer your questions and provide<br/> support whenever you need it.
            </div>
            <video width="600" controls>
            <source src="/VID.jpg" type="VID/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="bg- -bg--background lg:grid grid-cols-3 grid-rows-2 mx-auto">
        <div className="py-5">
          <div className="flex mt-4 mx-32">
            <div className="text-3xl text-black font-medium">100+</div>
            <div className="mx-2">
              <img className="" src="houseicon.svg" alt="house image" />
            </div>
          </div>
          <div className="mb-4 mx-10  text-gray-800">A diverse range of homes available</div>{" "}
          <hr className="border-gray-400 w-3/4 ml-3" />
        </div>
        <div className="py-5">
          <div className="flex mt-4 mx-32">
            <div className="text-3xl text-black font-medium">95%</div>
            <div className="mx-2">
              <img className="" src="happyface.svg" alt="house image" />
            </div>
          </div>
          <div className="mb-4 mx-10 text-gray-800">Happy clients are our top priority</div>{" "}
          <hr className="border-gray-400  w-3/4 ml-3" />
        </div>
        <div className="py-5">
          <div className="flex mt-4 mx-32">
            <div className="text-3xl text-black font-medium">50+</div>
            <div className="mx-2">
              <img className="" src="globe.svg" alt="house image" />
            </div>
          </div>
          <div className="mb-4 mx-10  text-gray-800">Explore neighborhoods across the area</div>
          <hr className="border-gray-400 w-3/4 ml-3" />
        </div>
        <div className="py-5">
          <div className="flex mt-4 mx-32">
            <div className="text-3xl text-black font-medium">75%</div>
            <div className="mx-2">
              <img className="" src="dollar.svg" alt="house image" />
            </div>
          </div>
          <div className="mb-4 mx-10  text-gray-800">Affordable options for every budget</div>
          <hr className="border-gray-400  w-3/4 ml-3" />
        </div>
        <div className="py-5">
          <div className="flex mt-4 mx-32">
            <div className="text-3xl text-black font-medium">15+</div>
            <div className="mx-2">
              <img className="" src="record.svg" alt="house image" />
            </div>
          </div>
          <div className="mb-4 mx-10  text-gray-800">Proven track record in real estate success</div>
          <hr className="border-gray-400  w-3/4 ml-3" />
        </div>
        <div className="py-5">
          <div className="flex mt-4 mx-32">
            <div className="text-3xl text-black font-medium">25%</div>
            <div className="mx-2">
              <img className="" src="graph.svg" alt="house image" />
            </div>
          </div>
          <div className="mb-4 mx-10  text-gray-800">Stay updated with comprehensive insights</div>
          <hr className="border-gray-400  w-3/4 ml-3  " />
        </div>
      </div>
      <div>
        <div className="mt-8 lg:mx-4">
          <div className="flex">
            <img src="houseicon.svg" alt="house icon" className="" />
            <div className="uppercase px-3 font-mono text-gray-800">MEMBERS</div>
          </div> <hr/>
          <div className="text-3xl font-medium my-5 lg:4xl">Meet Our Team</div>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:flex justify-between mx-4 ">
          <Card5 image={<img src="T1.jpg" alt="" className="w-40 h-48 lg:w-72 lg:h-96" />} name="Cameron Williamson" role="Precedent & CEO" />
          <Card5 image={<img src="T2.jpg" alt="" className="w-40 h-48 lg:w-72 lg:h-96" />} name="Leslie Alexander" role="Property Manager" />
          <Card5 image={<img src="T3.jpg" alt="" className="w-40 h-48 lg:w-72 lg:h-96" />} name="Savannah Nguyen" role="Marketing head" />
          <Card5 image={<img src="T4.jpg" alt="" className="w-40 h-48 lg:w-72 lg:h-96" />} name="Ronald Richards" role="Financial Advisor" />
        </div>
      </div>
      <div className="lg: mt-20">
       <div>
          <div className="flex flex-row">
            <img src="houseicon.svg" alt="house icon" />
            <div className="px-2">TESTIMONIALS</div>
          </div>
          <hr className="bg-black" />
          <div className="my-3 text-2xl font-medium text-black">
            Clients Reviews
          </div>
        </div>
         <div> <Carousel/> </div>
       </div>

      <section className="FAQSection w-[90%]">
          <FAQSection />
        </section>
    </div>
  );
};

export default About;
