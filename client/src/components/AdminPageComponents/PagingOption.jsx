import React from "react";
import Select from "react-dropdown-select";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useStates } from "../../context/useStates";
import { pageSizeOptions } from "../../constants";
const PagingOption = () => {
  const { pagination, totalPages, setPagination } = useStates();

  return (
    <div className="h-16 px-5 flex justify-between items-center text-white bg-black w-full fixed max-lg:bottom-12 bottom-0 left-0">
      <div className="flex items-center">
        <p className="text-sm font-poppins">Show rows per page : </p>
        <Select
          options={pageSizeOptions}
          color="rgb(41 220 94)"
          dropdownPosition="auto"
          labelField="value"
          valueField="id"
          name="pageSize"
          className="text-black w-10 bg-white h-2"
          onChange={(value) =>
            setPagination({ ...pagination, pageSize: value[0].value })
          }
          placeholder={pagination.pageSize}
        />
      </div>
      <div className="flex items-center w-3/12 justify-end">
        <div className="mx-4">
          <p>
            {pagination.offset + 1} of {totalPages}
          </p>
        </div>
        <button
          disabled={pagination.offset === 0}
          onClick={() => {
            if (pagination.offset !== 0) {
              setPagination({
                ...pagination,
                offset: pagination.offset - 1,
              });
            }
          }}
          className={` p-[12px] bg-black border-[1px] mr-3 border-half-black1 rounded-full cursor-pointer ${
            pagination.offset !== 0 && "hover:bg-half-black1"
          } `}
        >
          <BsChevronLeft />
        </button>
        <button
          disabled={pagination.offset === totalPages}
          onClick={() => {
            if (pagination.offset !== totalPages - 1) {
              setPagination({
                ...pagination,
                offset: pagination.offset + 1,
              });
            }
          }}
          className={`p-[12px]  bg-black border-[1px] border-half-black1 rounded-full cursor-pointer  ${
            pagination.offset !== totalPages - 1 && "hover:bg-half-black1"
          }`}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
};

export default PagingOption;
