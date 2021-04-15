import React from 'react';
import { createUseStyles } from 'react-jss';

import { Divider, Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core';

import { useBrickStore } from '../../store/brickStore';
import { useGlobalStore } from '../../store/globalStore';
import { useMissionStore } from '../../store/missionStore';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useGlobalStore();
  const classes = useStyle({ sidebarOpen });

  const { subjects } = useMissionStore();
  const { setSelectedSubjectId } = useBrickStore();

  const handleSelectSubject = (id?: string) => {
    setSelectedSubjectId(id || 'All');
    setSidebarOpen(false);
  };

  return (
    <div id='sidebar'>
      {/* <Drawer className={classes.drawer} variant='persistent' anchor='top' open={sidebarOpen}> */}
      <List className={classes.list}>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          课程分类
        </Typography>
        <Divider />
        <ListItem button alignItems='center' onClick={() => handleSelectSubject()}>
          <ListItemText primary='全部' />
        </ListItem>
        <Divider />
        {subjects.map(({ id, name }) => (
          <ListItem button key={id} alignItems='center' onClick={() => handleSelectSubject(id)}>
            <ListItemText primary={name} />
          </ListItem>
        ))}
      </List>
      {/* </Drawer> */}
    </div>
  );
};

const useStyle = createUseStyles<string, { sidebarOpen: boolean }>(
  {
    list: {
      width: '250px',
      overflow: 'hidden',
    },

    title: {
      fontSize: 20,
      textAlign: 'center',
    },
  },
  { index: 5 }
);

export default Sidebar;
