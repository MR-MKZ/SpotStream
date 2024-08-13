import { FC, useEffect, useState } from "react";
import SearchBox from "./components/SearchBox";
import { DownloadResult, SearchResult } from "./types/searchTypes";
import SearchResultBox from "./components/SearchResultBox";
import DownloadModal from "./components/DownloadModal";
import { Bounce, toast } from "react-toastify";

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
      } else if (downloadData.success === null) {
        toast.error('This track has some problems from spotify.', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
          });
      }
    }, [downloadData]);

  return (
    <div className={`w-full ${showModal ? "overflow-hidden h-0" : "overflow-auto h-max"} flex flex-col items-center justify-center`}>
      <SearchBox setsearchResult={setsearchResult} searchResultState={searchResult} />
      {searchResult && (
        <SearchResultBox searchResults={searchResult} setdownloadData={setdownloadData} />
      )}
      {showModal && (
        <>
          {/* backward */}
          <div className="w-screen h-screen bg-theme-400 fixed top-0 left-0 z-[100]"></div>
          {/* Download Modal */}
          <DownloadModal downloadData={downloadData} setShowModal={setShowModal} />
        </>
      )}
    </div>
  );
};

export default App;
