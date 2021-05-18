import React, { useEffect, useState } from "react";
// components
import VideoPlayer from "./VedioPlayer";
import { IconButton } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";

// hooks
import { useStudioStore } from "../../store/studioStore";

// http
import { getBookContent } from "../../http/studio";

// type
import { StyleSheet } from "../../types/dom";

interface BookContentProps {
  handleClose: () => void;
}

const BookContent = ({ handleClose }: BookContentProps) => {
  const [content, setContent] = useState(null);
  const selectedBookId = useStudioStore((state) => state.selectedBookId);

  const [playVedio, setPlayVedio] = useState<boolean>(false);
  const [vedioPlayerProps, setVedioPlayerProps] = useState<any>(null);

  const handlePlayVedio = (url) => {
    setPlayVedio(true);
    setVedioPlayerProps({});
  };
  const handleCloseVedio = () => {
    setPlayVedio(false);
  };

  const getData = async () => {
    const data = await getBookContent(selectedBookId);
    setContent(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {playVedio && <VideoPlayer handleClose={handleCloseVedio} />}
      {content && (
        <div style={styles.container}>
          <div style={styles.left}>
            {content.slice(0, 5).map((item, i) => {
              return (
                <div key={item.id}>
                  <h4
                    style={styles.vedioTitle}
                    onClick={() => handlePlayVedio(item.url)}
                  >
                    {item.name}
                  </h4>
                </div>
              );
            })}
          </div>
          <div style={styles.right}>
            {content.slice(5, 10).map((item, i) => {
              return (
                <div key={item.id}>
                  <h4
                    style={styles.vedioTitle}
                    onClick={() => handlePlayVedio(item.url)}
                  >
                    {item.name}
                  </h4>
                </div>
              );
            })}
          </div>
          <div style={styles.btnWrap}>
            <IconButton aria-label="cancel" style={styles.btn}>
              <ArrowBack />
            </IconButton>
            <button onClick={handleClose} style={styles.btn}>
              放回书柜
            </button>
            <IconButton aria-label="cancel" style={styles.btn}>
              <ArrowForward />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default BookContent;

const styles: StyleSheet = {
  container: {
    position: "relative",
    width: 950,
    height: 560,
    overflow: "hidden",
  },
  left: {
    fontSize: 25,
    position: "absolute",
    textAlign: "left",
    left: "5%",
    top: "10%",
  },
  right: {
    fontSize: 25,
    textAlign: "left",
    position: "absolute",
    left: "55%",
    top: "10%",
  },
  btnWrap: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    bottom: "5%",
    width: "100%",
  },
  btn: {
    backgroundColor: "white",
    margin: 50,
  },
  vedioTitle: {
    width: 500,
    cursor: "pointer",
  },
};
