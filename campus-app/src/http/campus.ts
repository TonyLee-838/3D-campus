import axios from 'axios';

const api = axios.create({
  baseURL: 'http://112.74.185.169/campus',
});

import { IBlock } from '../types';

export const getCampusData = async (campusId: number): Promise<IBlock[]> => {
  const { data: blocks } = api.get({
    url: '/blocks',
    params: {
      campusId,
    },
  });
  return blocks;
};
