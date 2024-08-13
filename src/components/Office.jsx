import React, { useLayoutEffect, useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';

export const FLOORHEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Office(props) {
  const { nodes, materials } = useGLTF('/models/WawaOffice.glb');
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef();
  const atticRef = useRef();

  const scroll = useScroll();

  useFrame(() => {
    if (tl.current && typeof tl.current.seek === 'function') {
      tl.current.seek(scroll.offset * tl.current.duration());
    } else {
      console.warn('GSAP timeline is not properly initialized or seek method is not available.');
    }
  });

  useLayoutEffect(() => {
    if (ref.current) {
      tl.current = gsap.timeline();    
      tl.current.to(
        ref.current.position,
        {
          duration: 2,
          y: -FLOORHEIGHT * (NB_FLOORS - 1),
        },  
        0
      );
      tl.current.to(
        ref.current.rotation,
        {
          duration: 1, x:0, y:Math.PI/6, z:0,
        },
        0
      );
            tl.current.to(
        ref.current.rotation,
        {
          duration: 1, x:0, y:Math.PI/6, z:0,
        },
        1
      )

      tl.current.to(
        ref.current.position,{
          duration:1,
          x:-1,
          z:2,
        },
        0     
       );
      tl.current.to(
        ref.current.position,{
          duration:1,
          x:1,
          z:2,
        },
        1  
       );
      tl.current.from(
        libraryRef.current.position,
        {
          duration: 0.5,
          x: -2
        },
        0.5
      );

      tl.current.from(
        libraryRef.current.rotation,
        {
          duration: 0.5,
          y: -Math.PI / 2
        },
        0
      );

      tl.current.from(
        atticRef.current.position,
        {
          duration: 1.5,
          y:2
        },
        0
      )
      tl.current.from(
        atticRef.current.position,
        {
          duration: 0.5,
          z: -2
        },
        1.5
      )
      tl.current.from(
        atticRef.current.rotation,
        {
          duration: 0.5,
          y: Math.PI / 2
        },
        1
      )
    }
  }, []);

  return (
       <group
      {...props}
      dispose={null}
      ref={ref}
      position={[0.5, -1, -1]}
      rotation={[0, -Math.PI / 3, 0]}
    >
      <mesh geometry={nodes["01_office"].geometry} material={materials["01"]} />
      <group position={[0, 2.11, -2.23]}>
        <group ref={libraryRef}>
          <mesh
            geometry={nodes["02_library"].geometry}
            material={materials["02"]}
          />
        </group>
      </group>
      <group position={[-1.97, 4.23, -2.2]}>
        <group ref={atticRef}>
          <mesh
            geometry={nodes["03_attic"].geometry}
            material={materials["03"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/WawaOffice.glb');
