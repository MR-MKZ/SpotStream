import { FC, useEffect, useState, Dispatch, SetStateAction } from "react";
import { DownloadResult } from "../types/searchTypes";

interface DownloadModalProps {
  downloadData: DownloadResult;
  setShowModal: Dispatch<SetStateAction<boolean>>;
//   showModal: boolean;
}

const DownloadModal: FC<DownloadModalProps> = ({ downloadData, setShowModal }) => {
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch(downloadData.link);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        setAudioSrc(url);
      } catch (error) {
        console.error("Error fetching audio: ", error);
      }
    };

    fetchAudio();

    // Clean up the blob URL to free memory
    return () => {
      if (audioSrc) {
        URL.revokeObjectURL(audioSrc);
      }
    };
  }, [audioSrc, downloadData]);

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div className={`flex flex-col gap-4 justify-center items-center absolute w-full md:w-[500px] h-max p-4 rounded-md bg-theme-300/70 border border-theme-200 backdrop-blur-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101]`}>
      <img src={downloadData.cover} alt={downloadData.title} className="w-full aspect-square" />
      <div>
        <h1>{downloadData.title}</h1>
        <p>{downloadData.album}</p>
        <p>{downloadData.artists.replace(",", " &")}</p>
        <p>{downloadData.releaseDate}</p>
      </div>
      {audioSrc ? <audio src={audioSrc}></audio> : <p>Loading Music ...</p>}
      <a href={downloadData.link} target="_blank">
        <button className="bg-theme-200 text-white p-2 rounded-md disabled:cursor-wait">
          Download music
        </button>
      </a>
      <button
          onClick={handleClose}
          className="bg-red-500 text-white p-2 rounded-md disabled:cursor-wait"
        >
          Close
        </button>
    </div>
  );
};

export default DownloadModal;
