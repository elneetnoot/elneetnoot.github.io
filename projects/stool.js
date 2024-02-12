import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export async function loadStool() {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load('./projects/artstool1.glb', (gltf) => {
            resolve(gltf.scene);
        }, undefined, (error) => {
            reject(error);
        });
    });
}