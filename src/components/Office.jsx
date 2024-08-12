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
    }
  }, []);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
      <mesh geometry={nodes['02_library'].geometry} material={materials['02']} position={[0, 2.11, -2.23]} />
      <mesh geometry={nodes['03_attic'].geometry} material={materials['03']} position={[-1.97, 4.23, -2.2]} />
    </group>
  );
}

useGLTF.preload('/models/WawaOffice.glb');
