import create, { State } from 'zustand';

interface GlobalStoreState extends State {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  pageSize: number;
}

export const useGlobalStore = create<GlobalStoreState>((setState) => ({
  setCurrentPage: (page) => setState({ currentPage: page }),
  currentPage: 1,
  pageSize: 20,
}));

export const usePagination = (data?: any[]) => {
  const { currentPage, pageSize, setCurrentPage } = useGlobalStore();
  const paginated = data ? data.slice((currentPage - 1) * pageSize, currentPage * pageSize) : null;

  return {
    paginated,
    currentPage,
    setCurrentPage,
  };
};
