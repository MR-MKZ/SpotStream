import { FC, useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import { DownloadResult, SearchResult } from "./types/searchTypes";
import SearchResultBox from "./components/SearchResultBox";
import DownloadModal from "./components/DownloadModal";

const App: FC = () => {

    const [searchResult, setsearchResult] = useState<SearchResult[]>([]);

    const [downloadData, setdownloadData] = useState<DownloadResult>({
      success: false,
      id: "",
      artists: "",
      title: "",
      album: "",
      cover: "",
      isrc: "",
      releaseDate: "",
      link: "",
    });

    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
      if (downloadData.success) {
        setShowModal(true)
      }
    }, [downloadData]);

  return (
    <div className={`w-full h-max flex flex-col items-center justify-center`}>
      <SearchBox setsearchResult={setsearchResult} searchResultState={searchResult} />
      {searchResult && (
        <SearchResultBox searchResults={searchResult} setdownloadData={setdownloadData} />
      )}
      {showModal && (
        <>
          <div className="w-screen h-screen bg-theme-400 absolute top-0 left-0 z-[100]"></div>
          <DownloadModal downloadData={downloadData} setShowModal={setShowModal} />
        </>
      )}
    </div>
  );
};

export default App;
