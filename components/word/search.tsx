import React, { ChangeEventHandler } from "react";
import { useState } from "react";

interface SearchProps {
  onChange: ChangeEventHandler;
  searchedText: String;
  setSearchedText: Function;
}

const Search: React.FC<SearchProps> = ({
  onChange,
  setSearchedText,
  searchedText,
}: SearchProps) => {
  return (
    <form>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="default-search"
          className="block p-4 pl-10 w-full text-xl  text-grey-800 bg-grey-200 rounded-lg  focus:ring-grey-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
          placeholder="Search Mockups, Logos..."
          onChange={(e) => {
            console.log("gggg", e.target.value);
            setSearchedText(e.target.value);
            onChange(e);
          }}
          value={searchedText}
        />
      </div>
    </form>
  );
};

export default Search;
