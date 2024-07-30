<script>
    import { onMount } from "svelte";
    import * as THREE from "three";

    let canvas, scene, camera, renderer;

    onMount(() => {
        // THREE.js initialization
        scene = new THREE.Scene();
        const targetAspect = window.innerWidth / window.innerHeight;
        const factor = 1.500375094 / targetAspect;

        // PerspectiveCamera parameters adjusted for better view
        camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000,
        );

        camera.position.setZ(2000);

        // WebGLRenderer setup
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        const ambientLight = new THREE.AmbientLight(0xffffff);
        scene.add(ambientLight);

        // Loading space background texture
        const spaceTexture = new THREE.TextureLoader().load(
            "/images/space.jpg",
        );
        spaceTexture.colorSpace = THREE.SRGBColorSpace;
        spaceTexture.wrapS = THREE.RepeatWrapping;
        scene.background = spaceTexture;

        // Make background responsive
        scene.background.offset.x = factor > 1 ? (1 - 1 / factor) / 2 : 0;
        scene.background.repeat.x = factor > 1 ? 1 / factor : 1;
        scene.background.offset.y = factor > 1 ? 0 : (1 - factor) / 2;
        scene.background.repeat.y = factor > 1 ? 1 : factor;

        // Adding stars to the scene
        Array.from({ length: 2000 }).forEach(addStar);

        // Activate the scrolling animation
        window.addEventListener("scroll", moveCam);
        // Initial animation call
        animate();
    });

    // Animation function to render the scene
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    // Function to add a star to the scene
    function addStar() {
        const geometry = new THREE.SphereGeometry(0.7, 24, 24);

        // Create a glowing material with emissive color
        const material = new THREE.MeshBasicMaterial({
            color: 0xffffff,
        });

        const star = new THREE.Mesh(geometry, material);

        // Random position within a cube centered at origin
        star.position.set(
            THREE.MathUtils.randFloatSpread(1000),
            THREE.MathUtils.randFloatSpread(1000),
            THREE.MathUtils.randFloatSpread(1000),
        );

        scene.add(star);
    }

    // Function for scrolling

    function moveCam() {
        const top = window.scrollY;

        camera.position.z = top * -0.1;
        camera.position.x = top * +0.01;
        camera.position.y = top * -0.2;
    }
</script>

<canvas bind:this={canvas}></canvas>
<div></div>

<style>
    :global(body) {
        margin: 0;
    }
    div {
        height: 200vh;
    }
    canvas {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 5000vh;
        z-index: -1; /* Ensure stars canvas is behind other content */
    }
</style>
