import React from 'react';
import { Button } from '@material-ui/core';
// import { Button } from 'react-bootstrap';
import { AppStyleSheet } from '../../types';
import { usePagination } from '../../store/globalStore';

const PaginationButtons = () => {
  const { currentPage, setCurrentPage } = usePagination();

  const incrementPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const decrementPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  return (
    <div style={styles.buttons}>
      <div>
        <Button variant='contained' color='primary' onClick={decrementPage}>
          {'<-'}
        </Button>
        <Button variant='contained' color='primary' onClick={incrementPage}>
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
