import { FC, Dispatch, SetStateAction } from "react";
import { DownloadResult } from "../types/searchTypes";

interface DownloadModalProps {
  downloadData: DownloadResult;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  //   showModal: boolean;
}

const DownloadModal: FC<DownloadModalProps> = ({
  downloadData,
  setShowModal,
}) => {
  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`flex flex-col gap-4 justify-center items-center absolute w-full md:w-[500px] h-max p-4 rounded-md bg-theme-300/70 border border-theme-200 backdrop-blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101]`}
    >
      <img
        src={downloadData.cover}
        alt={downloadData.title}
        className="w-full aspect-square"
      />
      <div className="text-white w-full flex justify-between">
        <div>
          <h1 className="text-xl">{downloadData.title}</h1>
          <p className="text-base text-theme-100">{downloadData.album}</p>
          <p className="text-sm text-theme-100">{downloadData.artists.replace(",", " &")}</p>
        </div>
        <div>
          <p>{downloadData.releaseDate}</p>
        </div>
      </div>
      <audio src={downloadData.link} controls className="w-fu"></audio>
      <a href={downloadData.link} target="_blank" className="w-full">
        <button className="bg-theme-200 text-white p-2 rounded-md disabled:cursor-wait w-full">
          Download music
        </button>
      </a>
      <button
        onClick={handleClose}
        className="bg-red-500 text-white p-2 rounded-md disabled:cursor-wait w-full"
      >
        Close
      </button>
    </div>
  );
};

export default DownloadModal;
