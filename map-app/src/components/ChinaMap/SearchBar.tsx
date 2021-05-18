import React, { useState } from 'react';

//UI
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Paper, InputBase, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import { SearchOutlined, CloseRounded } from '@material-ui/icons';

//Types
import { SchoolsData } from '../../types/ChinaMap';

interface SearchBarProps {
  searchData: SchoolsData[];
  onSelectSearchResult: (id: number) => void;
}

const SearchBar = ({ searchData, onSelectSearchResult }: SearchBarProps) => {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SchoolsData[]>([]);

  const handleSearch = () => {
    if (!inputValue) return;
    const _searchResults = [];

    for (let i = 0; i < searchData.length; i++) {
      const item = searchData[i];
      const result = item.name.search(inputValue);
      if (result !== -1) _searchResults.push(item);
    }
    setSearchResults(_searchResults);
  };

  const handleCancel = () => {
    setSearchResults([]);
    onSelectSearchResult(-1);
  };

  return (
    <>
      <Paper component='form' className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder='请输入搜索的关键字'
          inputProps={{ 'aria-label': 'search google maps' }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <IconButton className={classes.iconButton} aria-label='cancel' onClick={handleCancel}>
          <CloseRounded />
        </IconButton>
        <IconButton className={classes.iconButton} aria-label='search' onClick={handleSearch}>
          <SearchOutlined />
        </IconButton>
      </Paper>
      {searchResults.length > 0 && (
        <div className={classes.list}>
          <List component='nav' aria-label='secondary mailbox folder'>
            {searchResults.map(({ id, name }) => (
              <ListItem
                button
                onClick={() => {
                  onSelectSearchResult(id);
                }}
                key={id}
              >
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 300,
      position: 'absolute',
      right: '2%',
      top: '2%',
      zIndex: 200,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    list: {
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
      position: 'absolute',
      top: '10%',
      right: '2%',
      zIndex: 300,
      width: 300,
      borderRadius: 5,
      opacity: 0.8,
    },
  })
);

export default SearchBar;
