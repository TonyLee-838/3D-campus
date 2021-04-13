import { useEffect } from "react";
import ReactPlayer from "react-player";
import { Style, StyleSheet } from "../../types/dom";
import { IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";

interface VedioPlayerProps {
  url?: string;
  style?: Style;
  width?: number;
  height?: number;
  progress?: number;
  handleClose: () => void;
}

const VedioPlayer = ({
  url = "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  style = styles.vedio,
  width = 1000,
  height = 580,
  progress = 0,
  handleClose,
}: VedioPlayerProps) => {
  let playRef: ReactPlayer | null = null;
  // change progress when player starts
  const handleOnStart = () => {
    if (progress !== 0) {
      playRef?.seekTo(progress, "fraction");
    }
  };
  const handleGetProgress = (e: any) => {
    progress = e.played;
  };

  const uploadProgress = () => {
    console.log("upload progress");
  };

  useEffect(() => {
    return uploadProgress;
  }, []);
  return (
    <div>
      <ReactPlayer
        ref={(ref) => (playRef = ref)}
        url={url}
        playing={true}
        volumn={0.5}
        style={style}
        width={width}
        height={height}
        controls
        muted={false}
        onError={() => console.log("vedio-player error")}
        onStart={handleOnStart}
        onProgress={handleGetProgress}
      />
      <IconButton
        aria-label="cancel"
        style={styles.close}
        onClick={handleClose}
      >
        <CloseRounded />
      </IconButton>
    </div>
  );
};

const styles: StyleSheet = {
  vedio: {
    position: "absolute",
    left: -25,
    right: 0,
    top: -30,
    bottom: 0,
    margin: "auto",
    zIndex: 100,
  },
  close: {
    zIndex: 150,
    position: "absolute",
    right: 5,
    backgroundColor: "white",
    transition: "unset",
  },
};

export default VedioPlayer;
