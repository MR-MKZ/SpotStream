import { FC } from "react";
import AudioPlayer from "react-h5-audio-player";

interface MusicPlayerProps {
    musicUrl: string;
}

const MusicPlayer: FC<MusicPlayerProps> = ({ musicUrl }) => {
  return (
    <AudioPlayer
      src={musicUrl}
      onPlay={(e) => console.log("onPlay", e)}
      onPlayError={(e) => console.log("play error", e)}
      onError={(e) => console.log("error", e)}
    />
  );
};

export default MusicPlayer;
