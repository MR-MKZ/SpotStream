import { FC, useState } from "react";
import SearchBox from "./components/SearchBox";
import { SearchResult } from "./types/searchTypes";
import SearchResultBox from "./components/SearchResultBox";

const App: FC = () => {

    const [searchResult, setsearchResult] = useState<SearchResult[]>([]);

  return (
    <div className="w-full h-max flex flex-col items-center justify-center">
      <SearchBox setsearchResult={setsearchResult} searchResultState={searchResult} />
      {searchResult && (
        <SearchResultBox searchResults={searchResult} />
      )}
    </div>
  );
};

export default App;
