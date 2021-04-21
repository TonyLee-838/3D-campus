import create, { State } from "zustand";

import { ControlApi, ModelData, SuitablePositions } from "../types/index";
import { PointerLockControls } from "@react-three/drei";

interface StudioStoreState extends State {
  // useful data about control
  controlApi: ControlApi;
  pointerLockControlRef: PointerLockControls;
  pointerLocked: boolean;
  message: string;
  selectedBookId: number;
  showMissionPanel: boolean;
  // model data
  bookshelfData: ModelData;
  monitorData: ModelData;
  deskData: ModelData;
  npcData: ModelData;
  noteData: ModelData;
  // suitable positions
  suitablePositions: SuitablePositions;

  setControlApi: (controlApi: ControlApi) => void;
  setPointerLockControlRef: (
    pointerLockControlRef: PointerLockControls
  ) => void;
  setPointerLocked: (pointerLocked: boolean) => void;
  setMessage: (message: string) => void;
  setSelectedBookId: (selectedBookId: number) => void;
  setBookshelfData: (bookshelfData: ModelData) => void;
  setMonitorData: (monitorData: ModelData) => void;
  setDeskData: (deskData: ModelData) => void;
  setNPCData: (npcData: ModelData) => void;
  setNoteData: (noteData: ModelData) => void;
  setSuitablePositions: (suitablePositions: SuitablePositions) => void;
  setShowMissionPanel: (showMissionPanel: boolean) => void;
}

export const useStudioStore = create<StudioStoreState>((set) => ({
  // some useful data
  controlApi: null,
  pointerLockControlRef: null,
  pointerLocked: true,
  message: "Welcome!",
  selectedBookId: 0,
  showMissionPanel: false,
  // model data
  bookshelfData: null,
  monitorData: null,
  deskData: null,
  npcData: null,
  noteData: null,
  // suitable positions
  suitablePositions: null,

  setControlApi: (controlApi) => set({ controlApi }),
  setPointerLockControlRef: (pointerLockControlRef) =>
    set({ pointerLockControlRef }),
  setPointerLocked: (pointerLocked) => set({ pointerLocked }),
  setMessage: (message: string) => set({ message }),
  setSelectedBookId: (selectedBookId: number) => set({ selectedBookId }),
  setBookshelfData: (bookshelfData: ModelData) => set({ bookshelfData }),
  setMonitorData: (monitorData: ModelData) => set({ monitorData }),
  setDeskData: (deskData: ModelData) => set({ deskData }),
  setNPCData: (npcData: ModelData) => set({ npcData }),
  setNoteData: (noteData: ModelData) => set({ noteData }),
  setSuitablePositions: (suitablePositions: SuitablePositions) =>
    set({ suitablePositions }),
  setShowMissionPanel: (showMissionPanel: boolean) => set({ showMissionPanel }),
}));
