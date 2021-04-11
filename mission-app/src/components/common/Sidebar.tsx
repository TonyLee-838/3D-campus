import { Divider, Drawer, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import React from 'react';
import { useBrickStore } from '../../store/brickStore';
import { useGlobalStore } from '../../store/globalStore';
import { useMissionStore } from '../../store/missionStore';
import { AppStyleSheet } from '../../types';

const Sidebar = () => {
  const { sidebarOpen, setSidebarOpen } = useGlobalStore();

  const { subjects } = useMissionStore();
  const { setSelectedSubjectId } = useBrickStore();

  return (
    <div id='sidebar'>
      <Drawer anchor='left' open={sidebarOpen} onClose={() => setSidebarOpen(false)}>
        <List style={styles.list}>
          <Typography style={styles.title} color='textSecondary' gutterBottom>
            课程分类
          </Typography>
          <Divider />
          <ListItem
            button
            alignItems='center'
            onClick={() => {
              setSelectedSubjectId('All');
              setSidebarOpen(false);
            }}
          >
            <ListItemText primary='全部' />
          </ListItem>
          <Divider />
          {subjects.map((subject) => (
            <ListItem
              button
              key={subject.id}
              alignItems='center'
              onClick={() => {
                setSelectedSubjectId(subject.id);
                setSidebarOpen(false);
              }}
            >
              <ListItemText primary={subject.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

const styles: AppStyleSheet = {
  list: {
    width: '250px',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
};

export default Sidebar;
