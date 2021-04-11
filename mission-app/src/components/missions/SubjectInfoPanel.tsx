import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { AppStyleSheet } from '../../types';

const SubjectInfoPanel = () => {
  return (
    <Card style={styles.container}>
      <CardContent>
        <Typography style={styles.title}>任务列表</Typography>
      </CardContent>
    </Card>
  );
};

const styles: AppStyleSheet = {
  container: {
    width: '400px',
    height: '500px',
    margin: '0px 30px',
    padding: '30px',
    textOverflow: 'ellipsis',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
  },
};

export default SubjectInfoPanel;
