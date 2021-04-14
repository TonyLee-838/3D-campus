import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';

import { Card } from '@material-ui/core';

type AlignmentType = 'start' | 'center';

interface ScreenProps {
  children: ReactNode;
  justifyContent?: AlignmentType;
  alignItems?: AlignmentType;
  onReset?: React.MouseEventHandler<HTMLDivElement>;
}

const Screen = ({
  children,
  justifyContent = 'center',
  alignItems = 'center',
  onReset,
}: ScreenProps) => {
  const classes = useStyle({ justifyContent, alignItems });

  return (
    <div className={classes.container} onClick={onReset}>
      <Card className={classes.card}>{children}</Card>
    </div>
  );
};

const useStyle = createUseStyles<string, { justifyContent: AlignmentType; alignItems: AlignmentType }>({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#d7d7d7',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    padding: '30px 50px',
    backgroundColor: 'red',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ({ justifyContent }) => justifyContent,
    alignItems: ({ alignItems }) => alignItems,
    // justifyContent: ({ justifyContent }) => justifyContent,
    // alignItems: 'center',
  },
});

export default Screen;
