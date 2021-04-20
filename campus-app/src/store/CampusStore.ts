import create, { State } from "zustand";

// types
import { PointerLockControls } from "@react-three/drei";
import { Dims2, IBlock, IBuilding, SuitablePositions } from "../types";

type EnterStudio = (buildingId: string) => void;

interface CampusStoreState extends State {
  pointerLockControlRef: PointerLockControls;
  pointerLocked: boolean;
  suitablePositions: SuitablePositions;
  message: string;
  blocks: IBlock[];
  buildings: IBuilding[];
  enterStudio: EnterStudio;
  showEntireMap: boolean;
  playerPosition: Dims2;

  setPointerLockControlRef: (
    pointerLockControlRef: PointerLockControls
  ) => void;
  setPointerLocked: (pointerLocked: boolean) => void;
  setSuitablePositions: (buildings: SuitablePositions) => void;
  setMessage: (message: string) => void;
  setBlocks: (blocks: IBlock[]) => void;
  setBuildings: (buildings: IBuilding[]) => void;
  setEnterStudio: (enterStudio: EnterStudio) => void;
  setShowEntireMap: (showEntireMap: boolean) => void;
  setPlayerPosition: (playerPosition: Dims2) => void;
}

export const useCampusStore = create<CampusStoreState>((set) => ({
  pointerLockControlRef: null,
  pointerLocked: true,
  suitablePositions: null,
  message: null,
  blocks: null,
  buildings: null,
  enterStudio: null,
  showEntireMap: false,
  playerPosition: [0, 0],

  setPointerLockControlRef: (pointerLockControlRef) =>
    set({ pointerLockControlRef }),
  setPointerLocked: (pointerLocked) => set({ pointerLocked }),
  setSuitablePositions: (suitablePositions) => set({ suitablePositions }),
  setMessage: (message) => set({ message }),
  setBlocks: (blocks) => set({ blocks }),
  setBuildings: (buildings) => set({ buildings }),
  setEnterStudio: (enterStudio) => set({ enterStudio }),
  setShowEntireMap: (showEntireMap) => set({ showEntireMap }),
  setPlayerPosition: (playerPosition) => set({ playerPosition }),
}));
