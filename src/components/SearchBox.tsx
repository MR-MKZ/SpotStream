import { FC, useRef, useEffect } from "react";
import useSearchSpotify from "../hooks/useSearchSpotify";

const SearchBox: FC = () => {
  const searchBoxRef = useRef<HTMLInputElement | null>(null);

  const { searchSpotify, searchIsPending, searchIsSuccess, searchIsError, searchError } = useSearchSpotify();

  const handleSearch = () => {
    console.log(searchSpotify(searchBoxRef.current?.value || "")); // TODO: Need data validation to prevent empty search query.
  };

  useEffect(() => {
    if (!searchIsPending && searchIsSuccess) {
        console.log(searchIsSuccess);
    } else {
        console.log(searchError);
    }
    
}, [searchIsPending, searchIsSuccess, searchIsError, searchError]);
  return (
    <div className="w-[300px] h-max absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-5 bg-theme-300 rounded-md border border-theme-200 p-4">
      <input
        ref={searchBoxRef}
        type="text"
        placeholder="Search your music name"
        className="rounded-md p-2"
      />
      <button
        onClick={handleSearch}
        className="bg-theme-200 text-theme-100 p-2 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
