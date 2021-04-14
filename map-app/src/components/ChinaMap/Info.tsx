import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { StyleSheet } from '../../types/ChinaMap';

const Info = forwardRef<HTMLDivElement>((props, ref) => {
  const InfoRef = useRef<HTMLDivElement>(null);

  useImperativeHandle<any, any>(ref, () => ({
    show,
    hidden,
  }));

  const show = (text: string, left: number, top: number) => {
    if (InfoRef && InfoRef.current) {
      InfoRef.current.innerHTML = text;
      InfoRef.current.style.visibility = 'visible';
      InfoRef.current.style.left = left + 8 + 'px';
      InfoRef.current.style.top = top + 8 + 'px';
    }
  };

  const hidden = (): void => {
    InfoRef.current.style.visibility = 'hidden';
  };

  return <div style={styles.container} ref={InfoRef}></div>;
});

const styles: StyleSheet = {
  container: {
    position: 'absolute',
    zIndex: 5,
    background: 'white',
    padding: '10px',
    visibility: 'hidden',
  },
};

export default Info;
