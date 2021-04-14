import create, { State } from "zustand";

import { ControlApi, ModelData } from "../types/index";

interface StudioStoreState extends State {
  controlApi: ControlApi;
  pointerLocked: boolean;
  message: string;
  selectedBookId: number;
  bookshelfData: ModelData;
  monitorData: ModelData;
  deskData: ModelData;
  npcData: ModelData;
  noteData: ModelData;

  setControlApi: (controlApi: ControlApi) => void;
  setPointerLocked: (pointerLocked: boolean) => void;
  setMessage: (message: string) => void;
  setSelectedBookId: (selectedBookId: number) => void;
  setBookshelfData: (bookshelfData: ModelData) => void;
  setMonitorData: (monitorData: ModelData) => void;
  setDeskData: (deskData: ModelData) => void;
  setNPCData: (npcData: ModelData) => void;
  setNoteData: (noteData: ModelData) => void;
}

export const useStudioStore = create<StudioStoreState>((set) => ({
  controlApi: null,
  pointerLocked: true,
  message: "Welcome!",
  selectedBookId: 0,
  bookshelfData: null,
  monitorData: null,
  deskData: null,
  npcData: null,
  noteData: null,

  setControlApi: (controlApi) => set({ controlApi }),
  setPointerLocked: (pointerLocked) => set({ pointerLocked }),
  setMessage: (message: string) => set({ message }),
  setSelectedBookId: (selectedBookId: number) => set({ selectedBookId }),
  setBookshelfData: (bookshelfData: ModelData) => set({ bookshelfData }),
  setMonitorData: (monitorData: ModelData) => set({ monitorData }),
  setDeskData: (deskData: ModelData) => set({ deskData }),
  setNPCData: (npcData: ModelData) => set({ npcData }),
  setNoteData: (noteData: ModelData) => set({ noteData }),
}));
