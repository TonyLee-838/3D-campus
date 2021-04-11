import Province from "./Province";
const mapData = require("./china-map.json");
import { useFrame } from "react-three-fiber";
import {
  getCameraSuitableZPosition,
  getMeshCenter,
  locationsOfProvinces,
} from "./mapTools";
import { Vector3, MathUtils, PerspectiveCamera, Mesh } from "three";
import {
  CameraConfig,
  Color,
  MouseFunction,
  PointerFunction,
  MouseEvent,
  PointerEvenet,
  ZoomTarget,
} from "../../types/ChinaMap";

let allProvinces = null;

const cameraDefaultConfig: CameraConfig = {
  fov: 50,
  position: new Vector3(0, -120, 180),
  lookAt: new Vector3(0, 0, 0),
};

const cameraZoomConig: CameraConfig = {
  fov: 10,
  position: null,
  lookAt: null,
};

let camera: any = null;
let zoom: boolean = false;
let zoomStep: number = 0.1;

interface ProvincesProps {
  lineColor: Color;
  blockColor: Color;
  onPointerOut: PointerFunction;
  onPointerOver: PointerFunction;
  onPointerMove: PointerFunction;
  onClick: MouseFunction;
  zoomTarget?: ZoomTarget;
  // zoomed?: boolean
}

const Provinces = ({
  lineColor = "#ffffff",
  blockColor = "#1414AA",
  onPointerOut,
  onPointerOver,
  onPointerMove,
  onClick,
  zoomTarget,
}: // zoomed
ProvincesProps) => {
  const handleZoom = (e: MouseEvent) => {
    if (!zoom) {
      const mesh = e.object;
      const center = getMeshCenter(mesh);
      const z = getCameraSuitableZPosition(mesh);
      cameraZoomConig.position = new Vector3(center.x, center.y, z);
      cameraZoomConig.lookAt = center;
    }
    camera = e.camera;
    zoom = !zoom;
  };

  const handleZoomToTarget = () => {
    if (!zoomTarget) return (zoom = false);
    cameraZoomConig.position = zoomTarget.position;
    cameraZoomConig.lookAt = zoomTarget.lookAt;
    console.log("handleZoomToTarget");
    zoom = true;
  };

  useFrame(() => {
    if (camera) {
      camera.fov = MathUtils.lerp(
        camera.fov,
        zoom ? cameraZoomConig.fov : cameraDefaultConfig.fov,
        zoomStep
      );
      camera.position.lerp(
        zoom ? cameraZoomConig.position : cameraDefaultConfig.position,
        zoomStep
      );
      camera.lookAt(zoom ? cameraZoomConig.lookAt : cameraDefaultConfig.lookAt);
      camera.updateProjectionMatrix();
    }
  });

  //避免重复渲染，防止卡顿
  if (allProvinces) {
    handleZoomToTarget();
    return allProvinces;
  }

  return (allProvinces = (
    <group>
      {mapData.features.map((elem, i) => {
        return (
          <Province
            provinceData={elem}
            key={`province-${i}`}
            onPointerOut={onPointerOut}
            onPointerOver={onPointerOver}
            onPointerMove={onPointerMove}
            onClick={(e) => {
              onClick(e);
              handleZoom(e);
            }}
            lineColor={lineColor}
            blockColor={blockColor}
          />
        );
      })}
    </group>
  ));
};

export default Provinces;
