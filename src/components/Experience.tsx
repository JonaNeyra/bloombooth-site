import { ContactShadows, OrbitControls } from "@react-three/drei";

import { Carousel } from "./Carousel";

import { useFrame } from "@react-three/fiber";
import { Depth, LayerMaterial, Noise } from "lamina";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const BG_SPEED = 0.3;

const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    return `#${Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join("")}`;
};

const Background = () => {
    const ref = useRef(null);
    const [colorA, setColorA] = useState(getRandomColor());


    useFrame((_state, delta) => {
        // @ts-ignore
        ref.current.rotation.x = // @ts-ignore
            ref.current.rotation.y = // @ts-ignore
                ref.current.rotation.z +=
                    delta * BG_SPEED;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setColorA(getRandomColor());
        }, 5000); // Cambia el color cada 5 segundos

        return () => clearInterval(interval);
    }, []);

    return (
        <mesh scale={100} ref={ref}>
            <sphereGeometry args={[1, 64, 64]} />
            <LayerMaterial side={THREE.BackSide}>
                <Depth
                    colorA={colorA}
                    colorB="#3f494d"
                    alpha={1}
                    mode="normal"
                    near={130}
                    far={200}
                    origin={[100, 100, -100]}
                />
            </LayerMaterial>
        </mesh>
    );
};

export const Experience = () => {
    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.9} />
            <directionalLight position={[0, 20, 20]} intensity={1} />

            <Carousel />
            <ContactShadows scale={30} opacity={0.32} />

            <Background />
        </>
    );
};