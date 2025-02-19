import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function MovingSpotlight({ position, speed, angleRange }: any) {
    const lightRef = useRef<THREE.SpotLight>(null!);
    const coneRef = useRef<THREE.Mesh>(null!);

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();
        const angle = Math.sin(time * speed) * angleRange;

        if (lightRef.current) {
            lightRef.current.target.position.set(
                position[0] + Math.sin(angle) * 20,
                20,
                position[2] + Math.cos(angle) * 20
            );
            lightRef.current.target.updateMatrixWorld();
        }

        if (coneRef.current) {
            coneRef.current.lookAt(
                position[0] + Math.sin(angle) * 20,
                20,
                position[2] + Math.cos(angle) * 20
            );
        }
    });

    return (
        <>
            {/* Base del reflector */}
            <mesh position={position}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="black" />
            </mesh>

            {/* Haz de luz en forma de cono */}
            <mesh ref={coneRef} position={position}>
                <coneGeometry args={[2, 10, 32, 1, true]} />
                <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1.5} opacity={0.5} />
            </mesh>

            {/* Luz del reflector */}
            <spotLight
                ref={lightRef}
                position={position}
                angle={Math.PI / 6}
                penumbra={0.5}
                intensity={3}
                castShadow
                color="yellow"
            />
        </>
    );
}

export default function LiquidBackground() {
    return (
        <Canvas style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1 }}>
            <ambientLight intensity={0.3} />
            <MovingSpotlight position={[-5, 5, 0]} speed={1} angleRange={Math.PI / 4} />
            <MovingSpotlight position={[5, 5, 0]} speed={1.2} angleRange={Math.PI / 4} />
        </Canvas>
    );
}
