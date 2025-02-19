import { animated, useSpring } from "@react-spring/three";
import * as THREE from 'three';
import { extend, useLoader } from '@react-three/fiber';
import {ValentineCouple} from "@/components/ValentineCouple";
import {Camera} from "@/components/Camera";
import {Breakdancer} from "@/components/Breakdancer";
import {WomanDancer} from "@/components/WomanDancer";
extend({ BoxGeometry: THREE.BoxGeometry });

const LATERAL_DURATION = 700;
const FRONT_DURATION = 1800;

export const Carousel = (props: any) => {
    const { carouselRotation } = useSpring({
        from: {
            carouselRotation: 0,
        },
        to: [
            { carouselRotation: -Math.PI / 4, delay: LATERAL_DURATION },  // -45°
            { carouselRotation: -Math.PI / 2, delay: FRONT_DURATION },  // -90°
            { carouselRotation: -Math.PI, delay: LATERAL_DURATION },  // -180°
            { carouselRotation: -5 * Math.PI / 4, delay: LATERAL_DURATION },  // -225°
            { carouselRotation: -1.5 * Math.PI, delay: FRONT_DURATION },  // -270°
            { carouselRotation: -2 * Math.PI, delay: LATERAL_DURATION },  // -360°
        ],
        config: {
            mass: 5,
            tension: 400,
            friction: 50,
        },
        loop: true,
        immediate: true,
    });

    const grassTexture = useLoader(THREE.TextureLoader, "/textures/grass.jpg");
    grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
    grassTexture.repeat.set(4, 4);

    const cushion2Texture = useLoader(THREE.TextureLoader, "/textures/cushion2.jpg");
    cushion2Texture.wrapS = cushion2Texture.wrapT = THREE.RepeatWrapping;
    cushion2Texture.repeat.set(4, 4);

    return (
        <>
            <group rotation-y={-Math.PI / 4} position-y={-0.01}>
                <animated.group rotation-y={carouselRotation}>
                    <mesh position={[0, -0.5, 0]}>
                        <meshStandardMaterial
                            map={grassTexture}
                            bumpMap={grassTexture}
                            bumpScale={0.3}
                            roughness={0.5}
                        />
                        <boxGeometry args={[24, 1, 24]}/>
                    </mesh>

                    {/* 🏠 PARED PHOTOBOOTH */}
                    <mesh scale={[1, 10, 12]} position-y={5}>
                        <boxGeometry/>
                        <meshStandardMaterial
                            map={cushion2Texture}
                            bumpMap={cushion2Texture}
                            bumpScale={0.3}
                            roughness={0.5}
                        />
                    </mesh>

                    {/* 🏠 TECHO DE CARPA */}
                    <mesh position={[0, 10, 0]}>
                        <boxGeometry args={[16, 1, 12]}/>
                        <meshStandardMaterial
                            map={cushion2Texture}
                            bumpMap={cushion2Texture}
                            bumpScale={0.3}
                            roughness={0.5}
                        />
                    </mesh>

                    {/* PARK */}
                    <>
                        <ValentineCouple
                            position={[5, 0, -1]}
                            scale={[5, 5, 5]}
                            rotation-x={-Math.PI / 16}
                            rotation-y={-Math.PI / 16}
                        />

                        <animated.group visible={carouselRotation.to(v => v !== -Math.PI / 4)}>
                            <Camera
                                position={[11, 3, 0]}
                                scale={[2, 3, 2]}
                                rotation-x={-Math.PI}
                                rotation-y={-Math.PI / 2}
                                rotation-z={-Math.PI}
                            />
                        </animated.group>

                        <Breakdancer
                            position={[-4, 0, 2]}
                            scale={[2.5, 2.5, 2.5]}
                            rotation-x={-Math.PI}
                            rotation-z={-Math.PI}
                            rotation-y={-Math.PI / 2}
                        />

                        <WomanDancer
                            position={[-4, 0, -3]}
                            scale={[3.5, 3.5, 3.5]}
                            rotation-x={-Math.PI}
                            rotation-y={0.7 * -Math.PI}
                            rotation-z={-Math.PI}
                        />

                        <animated.group visible={carouselRotation.to(v => v !== -5 * Math.PI / 4)}>
                            <Camera
                                position={[-11, 3, 0]}
                                scale={[2, 3, 2]}
                                rotation-x={-Math.PI}
                                rotation-y={-1.5 * Math.PI}
                                rotation-z={-Math.PI}
                            />
                        </animated.group>
                    </>
                </animated.group>
            </group>
        </>
    );
};
