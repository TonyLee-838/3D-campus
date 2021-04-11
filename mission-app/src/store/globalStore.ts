import create, { State } from 'zustand';

interface GlobalStoreState extends State {
  sidebarOpen: boolean;
  setSidebarOpen: (status: boolean) => void;
}

export const useGlobalStore = create<GlobalStoreState>((setState) => ({
  sidebarOpen: false,
  setSidebarOpen: (status) => setState({ sidebarOpen: status }),
}));
