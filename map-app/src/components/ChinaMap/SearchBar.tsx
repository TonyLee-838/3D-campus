import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { CloseRounded } from "@material-ui/icons";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { SchoolsData } from "../../types/ChinaMap";
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 300,
      position: "absolute",
      right: "2%",
      top: "2%",
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
      position: "absolute",
      top: "10%",
      right: "2%",
      zIndex: 300,
      width: 300,
      borderRadius: 5,
      opacity: 0.8,
    },
  })
);

interface SearchBarProps {
  searchData: SchoolsData[];
  onSelectSearchResult: (id: number) => void;
}

export default function SearchBar({
  searchData,
  onSelectSearchResult,
}: SearchBarProps) {
  const classes = useStyles();
  const [inputValue, setInputValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SchoolsData[]>([]);

  const handleSearch = () => {
    if (inputValue === "") return;
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
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="请输入搜索的关键字"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <IconButton
          className={classes.iconButton}
          aria-label="cancel"
          onClick={handleCancel}
        >
          <CloseRounded />
        </IconButton>
        <IconButton
          className={classes.iconButton}
          aria-label="search"
          onClick={handleSearch}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {searchResults.length > 0 && (
        <div className={classes.list}>
          <List component="nav" aria-label="secondary mailbox folder">
            {searchResults.map((item) => (
              <ListItem
                button
                onClick={() => {
                  onSelectSearchResult(item.id);
                }}
                key={`list-item-${item.id}`}
              >
                <ListItemText primary={item.name} />
              </ListItem>
            ))}
          </List>
        </div>
      )}
    </>
  );
}
