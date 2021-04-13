import create, { State } from "zustand";

import {
  ControlApi,
  BookshelfData,
  MonitorData,
  DeskData,
} from "../types/index";

interface StudioStoreState extends State {
  controlApi: ControlApi;
  pointerLocked: boolean;
  message: string;
  selectedBookId: number;
  bookshelfData: BookshelfData;
  monitorData: MonitorData;
  deskData: DeskData;

  setControlApi: (controlApi: ControlApi) => void;
  setPointerLocked: (pointerLocked: boolean) => void;
  setMessage: (message: string) => void;
  setSelectedBookId: (selectedBookId: number) => void;
  setBookshelfData: (bookshelfData: BookshelfData) => void;
  setMonitorData: (monitorData: MonitorData) => void;
  setDeskData: (deskData: DeskData) => void;
}

export const useStudioStore = create<StudioStoreState>((set) => ({
  controlApi: null,
  pointerLocked: true,
  message: "Welcome!",
  selectedBookId: 0,
  bookshelfData: null,
  monitorData: null,
  deskData: null,

  setControlApi: (controlApi) => set({ controlApi }),
  setPointerLocked: (pointerLocked) => set({ pointerLocked }),
  setMessage: (message: string) => set({ message }),
  setSelectedBookId: (selectedBookId: number) => set({ selectedBookId }),
  setBookshelfData: (bookshelfData: BookshelfData) => set({ bookshelfData }),
  setMonitorData: (monitorData: MonitorData) => set({ monitorData }),
  setDeskData: (deskData: DeskData) => set({ deskData }),
}));
