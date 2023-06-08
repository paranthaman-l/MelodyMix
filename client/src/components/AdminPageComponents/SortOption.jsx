import React from "react";
import { SortOptions, songOptions } from "../../constants";
import Select from "react-dropdown-select";
import { useStates } from "../../context/useStates";
const SortOption = () => {
  const { setPagination, pagination } = useStates();
  return (
    <div className=" flex items-center justify-center  mb-3">
      {/* <button
        onClick={() => setPagination({ ...pagination, sortDirection: "ASC" })}
        className={`px-3 py-1 rounded-3xl border-[1px] border-black ${
          pagination.sortDirection === "ASC" && "bg-green"
        }`}
      >
        ASC
      </button>
      <button
        onClick={() => setPagination({ ...pagination, sortDirection: "DESC" })}
        className={`px-3 py-1 rounded-3xl border-[1px] border-black ${
          pagination.sortDirection === "DESC" && "bg-green"
        }`}
      >
        DESC
      </button>
      <Select
        options={SortOptions}
        name="field"
        valueField="id"
        labelField="value"
        className="min-w-[200px]"
        onChange={(value) =>
          setPagination({ ...pagination, field: value[0].value })
        }
        placeholder="Uid"
      /> */}
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
