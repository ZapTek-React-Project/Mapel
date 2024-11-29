export const PropertyCard = ({ src, location, price, name, availability }) => {
  return (
    <div className="group relative w-[100%] h-[100%] cursor-pointer overflow-hidden transition-opacity hover:opacity-100">
      <img
        src={src}
        alt="property-1"
        className="`object-cover w-full h-[100%] md:h-full transform transition duration-500 group-hover:scale-[1.05] cursor-zoom-in"
      />
      <div className="absolute top-3 right-3 bg-white w-fit px-2 py-1">
        {availability}
      </div>
      <div className="p-[10px] bg-white absolute bottom-3 left-2 w-[95%] ">
        <p className="font-medium text-[18px] space-y-2">{name}</p>
        <table className="opacity-80 w-[100%] ">
          <tr className="border-b-[1px] flex gap-2">
            <td>Location: </td>
            <td>{location}</td>
          </tr>
          <tr className="flex gap-8">
            <td>Price:</td>
            <td>{price}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};
