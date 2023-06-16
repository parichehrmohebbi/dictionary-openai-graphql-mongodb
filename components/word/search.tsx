import React, { ChangeEventHandler } from "react";
import { GoSearch } from "react-icons/go";
interface SearchProps {
  onChange: ChangeEventHandler;
  searchedText: string | number | readonly string[] | undefined;
  setSearchedText: Function;
}

const Search: React.FC<SearchProps> = ({
  onChange,
  setSearchedText,
  searchedText,
}: SearchProps) => {
  return (
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none ">
        <GoSearch className="text-purple-400"></GoSearch>
      </div>
      <input
        type="text"
        id="default-search"
        className="block p-4 pl-10 w-full text-xl  text-grey-800 dark:text-grey-200 bg-grey-200 dark:bg-grey-800 rounded-lg  focus:ring-grey-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 "
        placeholder="Search Your Word"
        onChange={(e) => {
          setSearchedText(e.target.value);
          onChange(e);
        }}
        value={searchedText}
      />
    </div>
  );
};

export default Search;
