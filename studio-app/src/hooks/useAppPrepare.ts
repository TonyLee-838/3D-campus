import { useEffect } from "react";

// components
import shallow from "zustand/shallow";

// http
import {
  getBookShelfData,
  getMonitorData,
  getDeskData,
  getNPCData,
  getNoteData,
} from "../http/studio";

// hooks
import { useStudioStore } from "../store/studioStore";
import { getSuitablePosition } from "../hooks/useSuitablePosition";
import { getSuitablePositionForNPC } from "../hooks/useSuitablePositionForNPC";

// types
import { SuitablePositions } from "../types";

// config
import { SUITABLE_DISTANCE } from "../config/studio";

export const useAppPrepare = () => {
  const {
    setBookshelfData,
    setMonitorData,
    setDeskData,
    setNPCData,
    setNoteData,
    setSuitablePositions,
  } = useStudioStore((state) => state, shallow);

  // get all necessary data
  const getData = async () => {
    const bookshelfData = await getBookShelfData();
    const monitorData = await getMonitorData();
    const deskData = await getDeskData();
    const npcData = await getNPCData();
    const noteData = await getNoteData();
    setBookshelfData(bookshelfData);
    setMonitorData(monitorData);
    setDeskData(deskData);
    setNPCData(npcData);
    setNoteData(noteData);

    const suitablePositions: SuitablePositions = {
      bookshelf: getSuitablePosition(bookshelfData),
      monitor: getSuitablePosition(monitorData, SUITABLE_DISTANCE.monitor),
      desk: getSuitablePosition(deskData),
      npc: getSuitablePositionForNPC(npcData).playerPosition,
    };
    setSuitablePositions(suitablePositions);
  };
  useEffect(() => {
    getData();
  }, []);
};
