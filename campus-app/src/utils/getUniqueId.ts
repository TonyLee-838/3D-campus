import { v4 } from 'uuid';

export const getUniqueId = (prefix = '') => {
  return prefix ? `${prefix}-${v4()}` : v4();
};
