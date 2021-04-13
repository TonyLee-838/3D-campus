import React from "react";
import colors from "../../config/colors";
import { StyleSheet } from "../../types";

const Aim = () => {
  return (
    <div style={styles.container}>
      <div style={styles.aim}></div>
      <div style={styles.aim}></div>
      <div style={{ ...styles.left, ...styles.left }}></div>
      <div style={{ ...styles.left, ...styles.right }}></div>
    </div>
  );
};

const styles: StyleSheet = {
  container: {
    zIndex: 200,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
  },
  aim: {
    width: 3,
    height: 18,
    backgroundColor: "lightseagreen",
    position: "absolute",
    opacity: 0.6,
  },
  left: {
    transform: "rotateZ(90deg)",
  },
  right: {
    transform: "rotateZ(-90deg)",
  },
};

export default Aim;
