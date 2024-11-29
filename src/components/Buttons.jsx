import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const NextButton = ({ text, to, className }) => {
  return (
    <Link to={to}>
      <button
        className={`${className} group border-[2px] -border--body w-fit py-2 px-5 bg-white text-black hover:bg-black hover:text-white transition-all duration-300 ease-out flex items-center gap-[10px]`}
      >
        {text}{" "}
        <span className="">
          <HiArrowUpRight className="group-hover:translate-x-[1px] group-hover:-translate-y-[2px]" />
        </span>
      </button>
    </Link>
  );
};
