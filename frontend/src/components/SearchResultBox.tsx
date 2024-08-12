import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import { DownloadResult, SearchResult } from "../types/searchTypes";
import timeConverter from "../utils/timeConverter";
import useDownloadFromSpotify from "../hooks/useDownloadFromSpotify";

interface SearchResultBoxProps {
  searchResults: SearchResult[];
  setdownloadData: Dispatch<SetStateAction<DownloadResult>>;
}

const SearchResultBox: FC<SearchResultBoxProps> = ({
  searchResults,
  setdownloadData,
}) => {
  const {
    downloadFromSpotify,
    downloadResult,
    downloadIsPending,
    downloadIsSuccess,
    // downloadIsError,
    // downloadError,
  } = useDownloadFromSpotify();

  const [pendingDownloadInfoButton, setpendingDownloadInfoButton] =
    useState("");

  const handleGetDownloadInfo = (url: string): void => {
    downloadFromSpotify(url);
    setpendingDownloadInfoButton(url);
  };

  useEffect(() => {
    if (!downloadIsPending && downloadIsSuccess) {
      setdownloadData(downloadResult);
    }
  }, [
    downloadResult,
    downloadIsPending,
    downloadIsSuccess,
    setdownloadData,
  ]);

  return (
    <div className="flex flex-col gap-2 w-full h-max justify-center mt-4">
      {searchResults.map((result) => {
        const artists: string[] = [];
        result.artists.forEach((artist) => {
          artists.push(artist.name);
        });
        return (
          <div
            className="w-full p-4 border border-theme-200 bg-theme-300 text-white rounded-md grid grid-cols-[1fr] gap-4 justify-center md:grid-cols-[1fr_300px_1fr_100px] items-center"
            key={result.id}
          >
            <div className="text-center md:text-left">
              <h2 className="text-lg">{result.name}</h2>
              <p className="text-theme-100 text-sm">{artists.join(" & ")}</p>
            </div>
            <audio
              src={result.preview_url}
              className="mx-auto w-full"
              controls
            ></audio>
            <button
              onClick={() => handleGetDownloadInfo(result.href)}
              className="bg-theme-200 text-white p-2 rounded-md disabled:cursor-wait"
              disabled={downloadIsPending}
            >
              {downloadIsPending && pendingDownloadInfoButton === result.href
                ? "Getting download info ..."
                : "Download"}
            </button>
            <p className="text-center md:text-right">
              {timeConverter(result.duration)}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResultBox;
