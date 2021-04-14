import React from "react";
import { StyleSheet } from "../../types/dom";
import colors from "../../config/colors";
// import { useEffect } from "react";

interface MessageProps {
  content: string;
}

const Message = ({ content }: MessageProps) => {
  if (!content) return null;
  let messageRef = null;
  return (
    <div style={styles.container} ref={(ref) => (messageRef = ref)}>
      {content}
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    position: "absolute",
    left: "12%",
    top: "1%",
    height: 50,
    backgroundColor: colors.grey,
    color: colors.white,
    fontSize: 30,
    textAlign: "center",
    zIndex: 350,
    opacity: 0.6,
    paddingLeft: 10,
    paddingRight: 10,
  },
};

export default Message;
