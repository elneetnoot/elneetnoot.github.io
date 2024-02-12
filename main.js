import * as THREE from 'three';
import { loadStool } from './projects/stool.js';


async function main() {

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 5);
    camera.lookAt(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const canvas = document.getElementById('bg');

    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const stool = await loadStool();
    scene.add(stool);

    // Render function
    function animate() {
        requestAnimationFrame(animate);
			stool.rotation.y += 0.001;

        renderer.render(scene, camera);
    }

    animate();
}

main().catch((err) => {
    console.error(err);
});