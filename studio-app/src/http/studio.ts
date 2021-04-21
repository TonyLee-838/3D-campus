import {
  ModelData,
  BookModelData,
  MissionsData,
  BookContent,
} from "../types/index";

// 根据工作室ID 获取书架模型的位置、旋转角度和模型的种类
export const getBookShelfData: (
  studioId?: number
) => Promise<ModelData> = async () => {
  const fakeBookShelfData: ModelData = {
    position: [6.5, 0, 0],
    // position: [0, 0, 0],
    rotation: [0, (3 * Math.PI) / 2, 0],
    modelType: 1,
  };
  return fakeBookShelfData;
};

// 根据工作室ID 获取一大堆书本模型的位置、旋转角度和模型的种类
export const getBooksData: (
  studioId?: number
) => Promise<BookModelData[]> = async () => {
  const fakeBooksData: BookModelData[] = [
    {
      id: 1,
      position: [6.5, 2.0, -1.4],
      rotation: [-3.1415926 / 12, 3.1415926 / 2, 0],
      modelType: 1,
    },
    // {
    //   id: 2,
    //   position: [6.5, 2.8, -1.4],
    //   rotation: [-3.1415926 / 12, 3.1415926 / 2, 0],
    //   modelType: 2,
    // },
    // {
    //   id: 3,
    //   position: [6.5, 2.0, 1.4],
    //   rotation: [-3.1415926 / 12, 3.1415926 / 2, 0],
    //   modelType: 3,
    // },
  ];
  return fakeBooksData;
};

//  根据书本ID 获取书本内容
export const getBookContent: (
  bookId: number
) => Promise<BookContent[]> = async (selectedBookId: number) => {
  const fakeBookContent: BookContent[] = [
    { id: 1, name: "java 第1课 基d本xdsf数据zz类型", videoUrl: "" },
    { id: 2, name: "java 第2课 对象dsffs的使用", videoUrl: "" },
    { id: 3, name: "java 第3课 多线程zzfsd概念的掌握", videoUrl: "" },
    { id: 4, name: "java 第4课 基z本数daxsadx据类型", videoUrl: "" },
    { id: 5, name: "java 第5课 对象dsadsad的使用", videoUrl: "" },
    { id: 6, name: "java 第6课 多线asda程zz概念的掌握", videoUrl: "" },
    { id: 7, name: "java 第7课 基本xsax数z据类型", videoUrl: "" },
    { id: 8, name: "java 第8课 对fsdf象saszxx的使用", videoUrl: "" },
    { id: 9, name: "java 第9课 多fsd线z程asdas概念的掌握", videoUrl: "" },
    { id: 10, name: "java 第10课 多fsdz线dz握", videoUrl: "" },
  ];
  return fakeBookContent;
};

// 根据工作室ID 获取屏幕模型的位置、旋转角度和模型的种类
export const getMonitorData: (
  studioId?: number
) => Promise<ModelData> = async () => {
  const fakeMonitorData: ModelData = {
    position: [0, 1.5, 4],
    // position: [0, 0, 0],
    rotation: [0, Math.PI, 0],
    modelType: 1,
  };
  return fakeMonitorData;
};

// 根据工作室ID 获取工作台模型的位置、旋转角度和模型的种类
export const getDeskData: (
  studioId?: number
) => Promise<ModelData> = async () => {
  const fakeDeskData: ModelData = {
    position: [-10.5, 0, 0],
    // position: [0, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    modelType: 1,
  };
  return fakeDeskData;
};

// 根据工作室ID 获取NPC模型的位置、旋转角度和模型的种类
export const getNPCData: (
  studioId?: number
) => Promise<ModelData> = async () => {
  const fakeDeskData: ModelData = {
    position: [-8, 0.2, 4],
    // position: [0, 0, 0],
    rotation: [0, (Math.PI * 3) / 4, 0],
    modelType: 1,
  };
  return fakeDeskData;
};

// 根据工作室ID 获取笔记本模型的位置、旋转角度和模型的种类
export const getNoteData: (
  studioId?: number
) => Promise<ModelData> = async () => {
  const fakeNoteData: ModelData = {
    position: [-9.5, 1.6, 0],
    // rotation: [-Math.PI / 2, 0, Math.PI / 2],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
    modelType: 1,
  };
  return fakeNoteData;
};

// 根据用户ID和工作室ID 获取该用户在该工作室的任务完成情况
export const getMissionsData: (
  userId: number,
  studioId: number
) => Promise<MissionsData> = async () => {
  const fakeMissionsData: MissionsData = {
    java: [
      {
        courseId: 1,
        courseName: "java",
        missionId: 1,
        missionName: "java 第1课 学习基本数据类型",
        status: "finished",
        type: "video",
      },
      {
        courseId: 1,
        courseName: "java",
        missionId: 2,
        missionName: "java 第2课 学习高级数据类型",
        status: "doing",
        type: "video",
      },
      {
        courseId: 1,
        courseName: "java",
        missionId: 3,
        missionName: "java 第3课 学习面向对象",
        status: "no-assigin",
        type: "exercise",
      },
    ],
    python: [
      {
        courseId: 2,
        courseName: "python",
        missionId: 4,
        missionName: "python 第1课 学习基本数据类型",
        status: "finished",
        type: "exercise",
      },
      {
        courseId: 2,
        courseName: "python",
        missionId: 5,
        missionName: "python 第2课 学习高级数据类型",
        status: "finished",
        type: "exercise",
      },
    ],
    javascript: [
      {
        courseId: 3,
        courseName: "js",
        missionId: 4,
        missionName: "js 第1课 学习基本数据类型",
        status: "finished",
        type: "video",
      },
      {
        courseId: 3,
        courseName: "js",
        missionId: 5,
        missionName: "js 第2课 学习高级数据类型",
        status: "finished",
        type: "exercise",
      },
    ],
    "C++": [
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
      {
        courseId: 4,
        courseName: "C++",
        missionId: Math.random(),
        missionName: "C++++++++++",
        status: "no-assigin",
        type: "exercise",
      },
    ],
  };
  return fakeMissionsData;
};
