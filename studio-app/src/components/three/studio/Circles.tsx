// components
import Circle from "./Circle";

// three
// attention: react-three-fiber is better than @react-three/fiber here
// because const {camera} = useThree() is valid when using react-three-fibe
// when using  @react-three/fiber, it makes errors!
import { useThree } from "react-three-fiber";

// hooks
import { useSuitablePosition } from "../../../hooks/useSuitablePosition";
import { useStudioStore } from "../../../store/studioStore";

// types
import { Dims3 } from "../../../types/studio";

const Circles = () => {
  const { camera } = useThree();
  const bookshelfData = useStudioStore((state) => state.bookshelfData);
  const monitorData = useStudioStore((state) => state.monitorData);
  const deskData = useStudioStore((state) => state.deskData);
  const { getSuitablePositionForPlayer: get1 } = useSuitablePosition(
    camera,
    bookshelfData.position,
    bookshelfData.rotation
  );
  const { getSuitablePositionForPlayer: get2 } = useSuitablePosition(
    camera,
    monitorData.position,
    monitorData.rotation
  );
  const { getSuitablePositionForPlayer: get3 } = useSuitablePosition(
    camera,
    deskData.position,
    deskData.rotation
  );

  const suitablePositions: Dims3[] = [];
  suitablePositions.push(get1(), get2(), get3());

  return (
    <group>
      {suitablePositions.map((position, i) => (
        <Circle position={position} key={`circle-${i}`} />
      ))}
    </group>
  );
};

export default Circles;
