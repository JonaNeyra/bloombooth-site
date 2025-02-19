import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

export default function Material() {
    return (
        <div>
        <Canvas
            shadows
            camera={{ position: [0, 10, 35], fov: 40 }}
            className="w-[95vw] h-[55vh] sm:w-[25vw] sm:h-[32vh] sm:max-w-[25vw] sm:max-h-[32vh] lg:w-[25vw] lg:h-[32vh]"
            style={{
                width: "95vw",
                height: "55vh",
            }}
        >
            <color attach="background" args={["#ececec"]} />
            <Experience />
        </Canvas>
        </div>
    );
}
