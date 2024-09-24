import React from "react";

const TaskSearch = ({searchValue, handleSearchValue}) => {
  return (
    <form className="flex justify-center items-center gap-4 w-full px-4">
    <label htmlFor="searchTask" className="sr-only">
      Search task
    </label>
    <input
      type="search"
      name="searchTask"
      id="searchTask"
      placeholder="Search task"
      role="search"
      className="border-2 border-black rounded-3xl h-10 px-4 focus:outline-none focus:ring focus:ring-green-400 placeholder:text-green-700/50 w-full sm:max-w-xs md:max-w-md lg:max-w-lg"
      onChange={handleSearchValue}
      value={searchValue}
    />
  </form>
  
  );
};

export default TaskSearch;
