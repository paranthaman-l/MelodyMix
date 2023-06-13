import React from "react";
import { SortOptions } from "../../constants";
const SortOption = () => {
  return (
    <div className=" flex items-center justify-center  mb-3">
      <table className="w-full">
        <tr className="flex justify-evenly w-full">
          {SortOptions.map((option) => {
            return <th>{option.value}</th>;
          })}
        </tr>
      </table>
    </div>
  );
};

export default SortOption;
