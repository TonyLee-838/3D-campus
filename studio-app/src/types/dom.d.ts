import React from "react";

export type Style = React.CSSProperties;

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}
