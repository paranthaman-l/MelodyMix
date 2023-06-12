import React from 'react'
import { pageSizeOptions } from '../../constants';
import Select from 'react-dropdown-select';
import { useStates } from '../../context/useStates';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const SongPagingOption = () => {
const {songPagination,setSongPagination,totalSongPages} = useStates();
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
            setSongPagination({ ...songPagination, pageSize: value[0].value })
          }
          placeholder={songPagination.pageSize}
        />
      </div>
      <div className="flex items-center w-3/12 justify-end">
        <div className="mx-4">
          <p>
            {songPagination.offset + 1} of {totalSongPages}
          </p>
        </div>
        <button
          disabled={songPagination.offset === 0}
          onClick={() => {
            if (songPagination.offset !== 0) {
              setSongPagination({
                ...songPagination,
                offset: songPagination.offset - 1,
              });
            }
          }}
          className={` p-[12px] bg-black border-[1px] mr-3 border-half-black1 rounded-full cursor-pointer ${
            songPagination.offset !== 0 && "hover:bg-half-black1"
          } `}
        >
          <BsChevronLeft />
        </button>
        <button
          disabled={songPagination.offset === totalSongPages}
          onClick={() => {
            if (songPagination.offset !== totalSongPages - 1) {
              setSongPagination({
                ...songPagination,
                offset: songPagination.offset + 1,
              });
            }
          }}
          className={`p-[12px]  bg-black border-[1px] border-half-black1 rounded-full cursor-pointer  ${
            songPagination.offset !== totalSongPages - 1 && "hover:bg-half-black1"
          }`}
        >
          <BsChevronRight />
        </button>
      </div>
    </div>
  )
}

export default SongPagingOption