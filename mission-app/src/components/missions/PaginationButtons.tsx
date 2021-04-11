import React from 'react';
import { Button } from '@material-ui/core';
// import { Button } from 'react-bootstrap';
import { AppStyleSheet } from '../../types';

const PaginationButtons = () => {
  return (
    <div style={styles.buttons}>
      <div>
        <Button variant='contained' color='primary'>
          {'<-'}
        </Button>
        <Button variant='contained' color='primary'>
          {'->'}
        </Button>
      </div>
    </div>
  );
};

const styles: AppStyleSheet = {
  buttons: {
    height: '70px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default PaginationButtons;
