import { useState } from "react";

interface SearchBarProps {
  setSearchQuery: (query: string) => void;
}

const SearchBar = ({ setSearchQuery }: SearchBarProps): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState<string>("");

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  return (
    <form className="w-[20rem] md:w-[25rem]">
      <div className="flex flex-row">
        <label
          htmlFor="search-dropdown"
          className="mb-2 text-sm font-medium sr-only text-white"
        >
          Your Email
        </label>
        <div className="relative w-[66%] md:w-[47%]">
          <button
            id="dropdown-button"
            onClick={toggleDropdown}
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center rounded-s-lg bg-neutral-700/70 hover:bg-neutral-600/80 text-white border-gray-600/50"
            type="button"
          >
            All benefits{" "}
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            className={`${
              isDropdownOpen ? "absolute" : "hidden"
            } left-0 mt-1 z-10 divide-y divide-gray-100 rounded-lg shadow w-44 bg-neutral-700`}
          >
            <ul
              className="py-2 text-sm text-gray-200"
              aria-labelledby="dropdown-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-neutral-600 hover:text-white"
                >
                  Lens Whitelist
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 hover:bg-neutral-600 hover:text-white"
                >
                  Min 20 Supply
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm rounded-e-lg bg-neutral-700 placeholder-gray-400 text-white focus:border-secondary"
            placeholder="Search membership..."
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
              setSearchQuery(e.target.value);
            }}
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full rounded-e-lg focus:ring-4 focus:outline-none bg-secondary hover:bg-secondary/70 focus:ring-secondary"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
