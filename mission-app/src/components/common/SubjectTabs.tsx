import React from 'react';
import { createUseStyles } from 'react-jss';

import { Divider, Drawer, List, ListItem, ListItemText, Tab, Tabs, Typography } from '@material-ui/core';

import { useBrickStore } from '../../store/brickStore';
import { useGlobalStore } from '../../store/globalStore';
import { useMissionStore } from '../../store/missionStore';

const SubjectTabs = () => {
  const classes = useStyle();

  const { subjects } = useMissionStore();
  const { setSelectedSubjectIndex, selectedSubjectIndex } = useBrickStore();

  const handleSelectSubject = (index: number) => {
    setSelectedSubjectIndex(index);
  };

  return (
    <Tabs id='tabs' value={selectedSubjectIndex} onChange={(_, index) => handleSelectSubject(index)}>
      {/* <Tab label='全部' value={-1} /> */}
      {subjects.map((subject, index) => (
        <Tab label={subject.name} value={index} key={`subject-tab-${subject.name}`} />
      ))}
    </Tabs>
  );
};

const useStyle = createUseStyles(
  {
    list: {
      width: '250px',
      overflow: 'hidden',
    },

    title: {
      fontSize: '1.8rem',
      textAlign: 'center',
    },
    subject: {
      textAlign: 'center',
      '& span': {
        fontSize: '1.35rem',
      },
    },
  },
  { index: 5 }
);

export default SubjectTabs;
