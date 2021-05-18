import axios from "axios";

import {
  ModelData,
  BookModelData,
  MissionsData,
  BookContent,
} from "../types/index";

const api = axios.create({
  baseURL: "http://112.74.185.169/studio",
});

// 根据工作室ID 获取书架模型的位置、旋转角度和模型的种类
export const getBookShelfData: (studioId?: number) => Promise<ModelData> =
  async (studioId) => {
    const { data: bookShelfData } = await api.get({
      url: "/bookShelf",
      params: {
        studioId,
      },
    });
    return bookShelfData;
  };

// 根据工作室ID 获取一大堆书本模型的位置、旋转角度和模型的种类
export const getBooksData: (studioId?: number) => Promise<BookModelData[]> =
  async (studioId) => {
    const { data: booksData } = await api.get({
      url: "/books",
      params: {
        studioId,
      },
    });
    return booksData;
  };

//  根据书本ID 获取书本内容
export const getBookContent: (bookId: number) => Promise<BookContent[]> =
  async (selectedBookId: number) => {
    const { data: bookContent } = await api.get({
      url: "/bookContent",
      params: {
        selectedBookId,
      },
    });
    return bookContent;
  };

// 根据工作室ID 获取屏幕模型的位置、旋转角度和模型的种类
export const getMonitorData: (studioId?: number) => Promise<ModelData> = async (
  studioId
) => {
  const { data: monitorData } = await api.get({
    url: "/monitorData",
    params: {
      studioId,
    },
  });
  return monitorData;
};

// 根据工作室ID 获取工作台模型的位置、旋转角度和模型的种类
export const getDeskData: (studioId?: number) => Promise<ModelData> = async (
  studioId
) => {
  const { data: deskData } = await api.get({
    url: "/deskData",
    params: {
      studioId,
    },
  });
  return deskData;
};

// 根据工作室ID 获取NPC模型的位置、旋转角度和模型的种类
export const getNPCData: (studioId?: number) => Promise<ModelData> = async (
  studioId
) => {
  const { data: npcData } = await api.get({
    url: "/npcData",
    params: {
      studioId,
    },
  });
  return npcData;
};

// 根据工作室ID 获取笔记本模型的位置、旋转角度和模型的种类
export const getNoteData: (studioId?: number) => Promise<ModelData> = async (
  studioId
) => {
  const { data: noteData } = await api.get({
    url: "/noteData",
    params: {
      studioId,
    },
  });
  return noteData;
};

// 根据用户ID和工作室ID 获取该用户在该工作室的任务完成情况
export const getMissionsData: (
  userId: number,
  studioId: number
) => Promise<MissionsData> = async (userId, studioId) => {
  const { data: missionsData } = await api.get({
    url: "/missionsData",
    params: {
      studioId,
      userId,
    },
  });
  return missionsData;
};
