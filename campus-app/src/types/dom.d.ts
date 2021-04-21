import React from 'react';

export type Style = React.CSSProperties;

export interface StyleSheet {
  [key: string]: React.CSSProperties;
}

export interface Studio {
  position: Dims2;
  name: string;
  id: string;
}
