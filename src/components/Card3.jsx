import React from "react";

const PropertyCard = ({ image, button, description, Location, Price }) => {
  return (
    <div className="max-w-sm mt-5 ">
      <div className="relative">
        <div className="w-full">{image}</div>
        <span className="absolute top-4 right-5 bg-white text-gray-800 text-xs px-3 py-1">
          {button}
        </span>

        <div className="p-3 absolute bottom-2 right-5 left-5 border bg-white text-left">
          <h2 className="text-lg font-serif text-gray-900">{description}</h2>
          <div className="text-sm text-gray-600 mt-1">
            <span className="font-bold px-2">Location:</span>
            {Location}
          </div>{" "}
          <hr />
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-bold px-2">Price:</span>
            {Price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
