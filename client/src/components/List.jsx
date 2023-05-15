/* eslint-disable react/prop-types */

const List = ({lists,style}) => {
  return (
    <div className={`absolute text-black bg-half-black1 duration-700  ${style}  font-roboto`}>
      <ul className="flex flex-col justify-center items-center py-2">
        {lists.map((list) => {
          return (
            <li
              className="flex justify-start items-center py-2 hover:bg-half-black2 w-full "
              key={list.id}
            >
              <span className="text-half-black px-4 text-2xl">{list.icon}</span>
              <span className="text-white text-base">{list.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  )
};

export default List;
