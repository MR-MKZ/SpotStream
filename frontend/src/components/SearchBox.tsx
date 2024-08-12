import { FC, useRef, useEffect, Dispatch, SetStateAction } from "react";
import useSearchSpotify from "../hooks/useSearchSpotify";
import { SearchResult } from "../types/searchTypes";

interface props {
  setsearchResult: Dispatch<SetStateAction<SearchResult[]>>;
  searchResultState: SearchResult[];
}

const SearchBox: FC<props> = ({ setsearchResult, searchResultState }) => {
  const searchBoxRef = useRef<HTMLInputElement | null>(null);

  const {
    searchSpotify,
    searchResult,
    searchIsPending,
    searchIsSuccess,
    searchIsError,
    searchError,
  } = useSearchSpotify();

  const handleSearch = () => {
    searchSpotify(searchBoxRef.current?.value || ""); // TODO: Need data validation to prevent empty search query.
  };

  const handleClear = () => {
    setsearchResult([]);
  };

  useEffect(() => {
    if (!searchIsPending && searchIsSuccess) {
      setsearchResult(searchResult);
    } else if (searchIsError) {
      setsearchResult([]);
      console.log(searchError);
    }
  }, [
    searchIsPending,
    searchIsSuccess,
    searchIsError,
    searchError,
    searchResult,
    setsearchResult,
  ]);
  return (
    <div className="w-full sm:w-[300px] h-max flex flex-col gap-5 bg-theme-300 rounded-md border border-theme-200 p-4">
      <input
        ref={searchBoxRef}
        type="text"
        placeholder="Search whatever you want"
        className="rounded-md p-2"
      />
      <button
        onClick={handleSearch}
        className="bg-theme-200 text-white p-2 rounded-md disabled:cursor-wait"
        disabled={searchIsPending}
      >
        {searchIsPending ? "Searching ..." : "Search"}
      </button>
      {searchResultState.length > 0 && (
        <button
          onClick={handleClear}
          className="bg-red-500 text-white p-2 rounded-md disabled:cursor-wait"
          disabled={searchIsPending}
        >
          Clear
        </button>
      )}
      {searchIsError && searchError && (
        <p className="text-red-600 text-center">Brother ey, What's that?</p>
      )}
    </div>
  );
};

export default SearchBox;
