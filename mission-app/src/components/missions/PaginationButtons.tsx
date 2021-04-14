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
    setCurrentPage(currentPage - 1);
  };

  return (
    <div style={styles.buttons}>
      <div>
        <Button variant='contained' color='primary'>
          {'<-'}
        </Button>
        {currentPage}
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
