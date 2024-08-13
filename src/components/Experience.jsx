import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

export const Experience = () => {
    return (
        <Canvas 
        camera={{
            fov: 64,
            position: [2.3, 1.5, 2.3],
        }}
        >
            <ambientLight intensity={2}/>
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                                <Overlay/>
                <Office/>

         </ScrollControls>
        </Canvas>
    );
};
