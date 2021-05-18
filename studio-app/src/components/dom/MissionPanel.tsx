import React, { useEffect, useState } from "react";

// components
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Tabs,
  Tab,
  MenuItem,
  Select,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  ListItemIcon,
  Button,
  IconButton,
} from "@material-ui/core";

import { LiveTv, Create, Cancel } from "@material-ui/icons";
// types
import { MissionData, MissionsData } from "../../types/index";

// http
import { getMissionsData } from "../../http/studio";

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
// copy ...
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// styles
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: 460,
    position: "absolute",
    left: "30%",
    top: "50%",
    transform: "translateX(-50%) translateY(-50%)",
    zIndex: 500,
  },
  list: {
    width: "100%",
    maxWidth: 460,
    backgroundColor: theme.palette.background.paper,
  },
  disabledBtn: {
    backgroundColor: "unset",
    color: "grey",
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
    getShownMissionsData(course, newValue);
  };

  const handleCourseChange = (event: React.ChangeEvent<{ value: string }>) => {
    setCourse(event.target.value);
    getShownMissionsData(event.target.value, value);
  };

  const getShownMissionsData = (
    course: string = "all",
    tabValue: number = 0,
    data = null
  ) => {
    // 根据所选科目进行任务的分类
    let _shownMissionsData: MissionData[] = [];
    data = data || missionsData;
    if (course === "all") {
      for (let i in data) {
        const item = data[i];
        _shownMissionsData.push(...item);
      }
    } else {
      _shownMissionsData.push(...missionsData[course]);
    }
    // 根据所选tab栏目进行任务的过滤
    _shownMissionsData = _shownMissionsData.filter((item) => {
      if (tabValue === 1) {
        return item.status === "finished";
      }
      return item.status !== "finished";
    });
    setShownMissionsData(_shownMissionsData);
  };

  const getData = async () => {
    const data = await getMissionsData(1, 1);
    setMissionsData(data);
    setCoursesData(Object.keys(data));
    getShownMissionsData("all", 0, data);
  };

  const handleReceiveMission = (id) => {
    const _missionsData = missionsData;
    for (let i in _missionsData) {
      const item = _missionsData[i];
      item.forEach((mission) => {
        if (mission.missionId === id) {
          mission.status = "doing";
        }
      });
    }
    setMissionsData(_missionsData);
    getShownMissionsData(course, value, _missionsData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.root}>
      {/* 选择器 */}
      <div style={{ display: "flex", justifyContent: "center" }}>
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
              <MenuItem key={item.id} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
        {/* 关闭图标 */}
        {/* <IconButton
          aria-label="cancel"
          style={{ position: "absolute", right: 6 }}
          // onClick={handleClose}
        >
          <Cancel />
        </IconButton> */}
      </div>
      {/* Tab栏 */}
      <AppBar position="static" style={{ marginTop: 10 }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          aria-label="simple tabs example"
          variant="fullWidth"
        >
          <Tab label="未完成任务" {...a11yProps(0)} />
          <Tab label="已完成任务" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      {/* 列表 */}
      <List className={classes.list} style={{ overflowY: "auto", height: 450 }}>
        {shownMissionsData &&
          shownMissionsData.map((item, i) => (
            <ListItem key={`list-item-${i}`}>
              <ListItemIcon style={{ marginRight: 20 }}>
                {item.type === "video" ? <LiveTv /> : <Create />}
                {item.type === "video" ? "视频" : "习题"}
              </ListItemIcon>
              <ListItemText primary={item.missionName} />
              <ListItemSecondaryAction>
                <Button
                  variant="contained"
                  color={missionStatusTable[item.status].color as any}
                  disabled={missionStatusTable[item.status].disabled}
                  onClick={() => {
                    handleReceiveMission(item.missionId);
                  }}
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
