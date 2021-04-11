import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { useBrickArrays, useHoveredId, usePointerLocations } from '../../store/brickStore';

const Bricks = () => {
  const { hoveredId, setHoveredId } = useHoveredId();
  const { setPointerLocations } = usePointerLocations();
  const { colorArray, stepArray, currentIndex } = useBrickArrays();
  const size = stepArray.length;

  const brickRef = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tempObject = new THREE.Object3D();

  const previous = useRef();
  useEffect(() => {
    document.body.style.cursor = hoveredId ? 'pointer' : 'auto';
    previous.current = hoveredId;
  }, [hoveredId]);

  useEffect(() => {
    stepArray.forEach((id, index) => {
      const height = 2.1 + ((index - currentIndex) * 3) / stepArray.length;

      tempObject.position.set(0, height / 2 - 2.5, (currentIndex - index) * 0.5);

      const scale = id === hoveredId ? 1.1 : 1;
      tempObject.scale.set(1, height * scale, 1);

      tempObject.updateMatrix();

      brickRef.current.setMatrixAt(index, tempObject.matrix);
    });

    brickRef.current.instanceMatrix.needsUpdate = true;
  }, [size, tempObject, hoveredId, stepArray, currentIndex]);

  const onPointerOver = (e) => {
    const index = e.instanceId;
    const id = stepArray[index];
    setHoveredId(id);
    setPointerLocations({ x: e.clientX, y: e.clientY });
  };

  const onPointerOut = () => {
    setHoveredId('');
  };

  return (
    <instancedMesh
      ref={brickRef}
      args={[null, null, size]}
      rotation={[0, 0, 0]}
      key={size}
      onPointerMove={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <boxBufferGeometry attach='geometry' args={[0.7, 1, 0.3]}>
        <instancedBufferAttribute attachObject={['attributes', 'color']} args={[colorArray, 3]} />
      </boxBufferGeometry>
      <meshPhongMaterial transparent opacity={0.9} attach='material' vertexColors={THREE.VertexColors} />
    </instancedMesh>
  );
};

export default Bricks;
