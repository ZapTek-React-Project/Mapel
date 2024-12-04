import React from "react";
import "/src/pages/Services.css";
const Testimonial = () => {
  return (
    <div className="-bg--background px-20 py-10">
      <div className="flex gap-3 border-b border-white pb-2">
        <div>
          <img src="/Servicesimages/homepic.svg" width={18} height={20} />
        </div>
        <div>WHAT WE DO</div>
      </div>

      <div className="">
        <h1 className="mt-3 mb-10 text-2xl">Clients Review</h1>
      </div>
      <div>
        <div className="flex flex-col">
          <div className=" flex h-[65vh] gap-10">
            <img src="/Servicesimages/darlenereview.jpg" className="w-1/3" />
            <div className="border border-gray-300 space-y-5 py-16 px-8 ">
              <h4 className="text-2xl">Our Dream Home Became a Reality!</h4>
              <p className="">
                The team at Mapel helped us find a home that we had only ever
                imagined. We were very particular about the kind of property we
                wanted and had high expectations, but Mapel delivered beyond
                what we thought was possible. Their commitment to finding the
                right home for us was evident in every interaction. Even after
                we moved in, they stayed in touch to ensure everything was
                perfect. We’re incredibly grateful for their efforts and will
                always remember this positive experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
