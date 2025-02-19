import { ThreeElements } from '@react-three/fiber';
import { Mesh, BufferGeometry, Material, Object3D, NormalBufferAttributes } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';


declare global {
    namespace React {
        namespace JSX {
            interface IntrinsicElements extends ThreeElements {
                mesh: {
                    geometry?: BufferGeometry<NormalBufferAttributes>;
                    material?: Material | Material[];
                } & ThreeElements['mesh'];
            }
        }
    }
}

declare module '@react-three/drei' {
    export function useGLTF<T extends GLTF = GLTF>(path: string): T;
    export namespace useGLTF {
        function preload(path: string): void;
    }
}
