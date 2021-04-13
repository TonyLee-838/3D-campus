import React, { useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";

import { MissionData, MissionsData, MissionStatus } from "../../types/index";
import { getMissionsData } from "../../http/studio";

// copy...
interface TabPanelProps {
  children?: React.ReactNode;
  value: any;
}

type CourseData = Array<string>;

const missionStatusTable = {
  doing: {
    text: "正在执行",
    color: "primary",
    disabled: true,
  },
  finished: {
    text: "已经完成",
    color: "default",
    disabled: true,
  },
  "no-assigin": {
    text: "领取任务",
    color: "secondary",
    disabled: false,
  },
};

// copy...
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 360,
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const MissionPanel = () => {
  const classes = useStyles();
  // tab value
  const [value, setValue] = useState<number>(0);
  // selected course
  const [course, setCourse] = useState<string>("all");
  // missions data
  const [missionsData, setMissionsData] = useState<MissionsData>(null);
  const [coursesData, setCoursesData] = useState<CourseData>(null);
  const [shownMissionsData, setShownMissionsData] = useState<MissionData[]>(
    null
  );

  const handleChangeTab = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleCourseChange = (event: React.ChangeEvent<{ value: string }>) => {
    setCourse(event.target.value);
    const _shownMissionsData: MissionData[] = [];
    if (event.target.value === "all") {
      for (let i in missionsData) {
        const item = missionsData[i];
        _shownMissionsData.push(...item);
      }
    } else {
      _shownMissionsData.push(...missionsData[event.target.value]);
    }
    setShownMissionsData(_shownMissionsData);
  };

  const getData = async () => {
    const data = await getMissionsData(1, 1);
    setMissionsData(data);
    setCoursesData(Object.keys(data));
    const _shownMissionsData: MissionData[] = [];
    for (let i in data) {
      const item = data[i];
      _shownMissionsData.push(...item);
    }
    setShownMissionsData(_shownMissionsData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <h4 style={{ display: "inline", margin: 10 }}>按科目查看任务：</h4>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={course}
          onChange={handleCourseChange}
        >
          <MenuItem value={"all"}>所有科目</MenuItem>
          {coursesData &&
            coursesData.map((item, i) => (
              <MenuItem key={`course-${i}`} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </div>

      <AppBar position="static" style={{ marginTop: 10 }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="simple tabs example"
        >
          <Tab label="未完成任务" {...a11yProps(0)} />
          <Tab label="已完成任务" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <List className={classes.list}>
        {shownMissionsData &&
          shownMissionsData.map((item, i) => (
            <ListItem key={`list-item-${i}`}>
              <ListItemText primary={item.missionName} />
              <ListItemSecondaryAction>
                <Button
                  variant="contained"
                  color={missionStatusTable[item.status].color as any}
                  disabled={missionStatusTable[item.status].disabled}
                >
                  {missionStatusTable[item.status].text}
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default MissionPanel;
