import { withWidth } from "@material-ui/core";
import React from "react";
import colors from "../../config/colors";
import { StyleSheet } from "../../types";

const Aim = () => {
  return <div style={styles.container}></div>;
};

const styles: StyleSheet = {
  container: {
    zIndex: 200,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    backgroundColor: "red",
    width: 15,
    height: 15,
    borderRadius: 7.5,
    opacity: 0.5,
  },
};

export default Aim;
