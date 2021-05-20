import React from 'react';
import { StyleSheet } from '../../types/dom';
import colors from '../../config/colors';

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
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '20%',
    height: 50,
    backgroundColor: colors.grey,
    color: colors.white,
    fontSize: 30,
    textAlign: 'center',
    zIndex: 350,
    opacity: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
};

export default Message;
