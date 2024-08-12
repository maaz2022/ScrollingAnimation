import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";

export const Experience = () => {
    return (
        <Canvas>
            <ambientLight intensity={2}/>
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Office/>
         </ScrollControls>
        </Canvas>
    );
};
