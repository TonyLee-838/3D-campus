import React from "react";
import { createUseStyles } from "react-jss";

// components
import QuizApp from "../external/QuizApp";
import { IconButton } from "@material-ui/core";
import { CloseRounded } from "@material-ui/icons";

// three
import { Html } from "@react-three/drei";

// types
import { StyleSheet } from "../../types/";

const Quiz = ({ onClick }) => {
  const classes = useStyle();

  return (
    <Html
      transform
      position={[0, 40, 0]}
      rotation={[0, 0, 0]}
      className={classes.container}
    >
      <QuizApp />
      {/* <IconButton
        aria-label="cancel"
        className={classes.close}
        onClick={onClick}
      >
        <CloseRounded />
      </IconButton> */}
    </Html>
  );
};

const useStyle = createUseStyles(
  {
    container: {
      // width: 1000,
      height: "100vh",
      // position: "relative",
      // top: "40%",
      // left: "40%",
    },
    close: {
      zIndex: 150,
      position: "absolute",
      backgroundColor: "white",
      transition: "unset",
      top: "25px",
      right: "50px",
    },
  },
  { index: 99 }
);

// const styles: StyleSheet = {

// };

export default Quiz;
