/* eslint-disable react/prop-types */
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
const OntopOption = ({
  handleClick,
  description = "",
  title = "",
}) => {
  return (
    <div className="flex justify-between items-center text-white">
      <div className="flex flex-col">
        <p className="text-[16px] text-half-black  font-roboto">
          {description}
        </p>
        <p className="text-[34px] font-bold">{title}</p>
      </div>
      <div className="flex justify-between items-center w-[95px] max-lg:hidden">
        <span
          onClick={() => handleClick("left")}
          className={` p-[12px] bg-black border-[1px] border-half-black1 rounded-full cursor-pointer hover:bg-half-black1`}
        >
          <BsChevronLeft />
        </span>
        <span
          onClick={() => handleClick("right")}
          className="p-[12px] bg-black border-[1px] border-half-black1 rounded-full cursor-pointer hover:bg-half-black1"
        >
          <BsChevronRight />
        </span>
      </div>
    </div>
  );
};

export default OntopOption;
