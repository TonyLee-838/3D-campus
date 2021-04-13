import React, { useRef } from "react";

// Three
import { useGLTF } from "@react-three/drei";

// Hooks
import { useStudioStore } from "../../../store/studioStore";

export default function BookShelf(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./3d/book/bookshelf.glb");
  const bookshelfData = useStudioStore((state) => state.bookshelfData);

  const position = bookshelfData.position;
  const rotation = bookshelfData.rotation;

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={position}
      rotation={rotation}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={[0.065, 0.065, 0.065]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[354.34, 260.82, 399.81]}
            rotation={[Math.PI, 1.01, 2.79]}
            scale={[100, 100, 100]}
          />
          <group
            position={[63.35, 261.16, 146.43]}
            rotation={[1.89, 0.88, -2.05]}
            scale={[100, 100, 100]}
          >
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group
            position={[90, 200, 40]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              geometry={nodes.Rak_Buku_Atas_Rak_Buku_Atas_0.geometry}
              material={materials.Rak_Buku_Atas}
            />
          </group>
          <group
            position={[90, 200, 40]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              geometry={nodes.Rak_Buku_Bawah_Rak_Buku_Bawah_0.geometry}
              material={materials.Rak_Buku_Bawah}
            />
          </group>
          <group
            position={[90, 200, 40]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              geometry={nodes.Rak_Buku_Handle_Rak_Buku_Handle_0.geometry}
              material={materials.Rak_Buku_Handle}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./3d/book/bookshelf.glb");
