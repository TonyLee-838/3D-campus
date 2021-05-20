import axios from 'axios';

import { Mission, Subject } from '../types';

const api = axios.create({
  baseURL: 'http://112.74.185.169',
});

export const getDataFromBackend = (): Promise<{
  missions: Mission[];
  subjects: Subject[];
}> => {
  return api.get({
    url: '/missions',
  });
};
