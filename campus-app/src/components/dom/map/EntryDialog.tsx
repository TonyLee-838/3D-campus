import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Studio } from '../../../types';

interface EntryDialogProps {
  studio: Studio | null;
  onEnter: any;
  onCancel: any;
}

const EntryDialog = ({ studio, onEnter, onCancel }: EntryDialogProps) => {
  return (
    <Dialog
      open={!!studio}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      style={{ width: '100%', height: '100%' }}
    >
      <DialogTitle id='alert-dialog-title' style={{ padding: '15px 120px' }}>
        {'是否直接前往'}
      </DialogTitle>
      <DialogContent>
        <Typography variant='subtitle1'>{studio.name}</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onCancel} color='primary'>
          取消
        </Button>
        <Button onClick={() => onEnter(studio.id)} color='primary'>
          前往
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EntryDialog;
