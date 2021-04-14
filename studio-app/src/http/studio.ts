import {
  ModelData,
  BookModelData,
  MissionsData,
  BookContent,
} from "../types/index";

export const getBookShelfData: () => Promise<ModelData> = async () => {
  const fakeBookShelfData: ModelData = {
    position: [6.5, 0, 0],
    // position: [0, 0, 0],
    rotation: [0, (3 * Math.PI) / 2, 0],
    modelType: 1,
  };
  return fakeBookShelfData;
};

export const getBooksData: () => Promise<BookModelData[]> = async () => {
  const fakeBooksData: BookModelData[] = [
    {
      id: 1,
      position: [6.5, 2.0, -1.4],
      rotation: [-3.1415926 / 12, 3.1415926 / 2, 0],
      modelType: 1,
    },
    // {
    //   id: 2,
    //   position: [-13, 6.3, -1.5],
    //   rotation: [3.1415926 / 2, 3.1415926 / 2, 0],
    //   modelType: "b1",
    // },
    // {
    //   id: 3,
    //   position: [-13, 8.3, -1.5],
    //   rotation: [3.1415926 / 2, 3.1415926 / 2, 0],
    //   modelType: "b1",
    // },
  ];
  return fakeBooksData;
};

export const getBookContent: (id: number) => Promise<BookContent[]> = async (
  selectedBookId: number
) => {
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

export const getMonitorData: () => Promise<ModelData> = async () => {
  const fakeMonitorData: ModelData = {
    position: [0, 1.5, 4],
    // position: [0, 0, 0],
    rotation: [0, Math.PI, 0],
    modelType: 1,
  };
  return fakeMonitorData;
};

export const getDeskData: () => Promise<ModelData> = async () => {
  const fakeDeskData: ModelData = {
    position: [-10.5, 0, 0],
    // position: [0, 0, 0],
    rotation: [0, Math.PI / 2, 0],
    modelType: 1,
  };
  return fakeDeskData;
};

export const getNPCData: () => Promise<ModelData> = async () => {
  const fakeDeskData: ModelData = {
    position: [-8, 0.2, 4],
    // position: [0, 0, 0],
    rotation: [0, (Math.PI * 3) / 4, 0],
    modelType: 1,
  };
  return fakeDeskData;
};

export const getNoteData: () => Promise<ModelData> = async () => {
  const fakeNoteData: ModelData = {
    position: [-9.5, 1.6, 0],
    // position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, Math.PI / 2],
    modelType: 1,
  };
  return fakeNoteData;
};

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
        type: "vedio",
      },
      {
        courseId: 1,
        courseName: "java",
        missionId: 2,
        missionName: "java 第2课 学习高级数据类型",
        status: "doing",
        type: "vedio",
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
        type: "vedio",
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
