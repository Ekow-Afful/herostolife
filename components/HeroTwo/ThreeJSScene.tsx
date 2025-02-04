// "use client"

// import * as THREE from "three";
// import { useEffect, useRef } from "react";
// import { FontLoader } from "three/examples/jsm/Addons.js";

// const ThreeJsScene = () => {
//   const sceneRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!sceneRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     sceneRef.current.appendChild(renderer.domElement);

//     const fontLoader = new FontLoader();
//     fontLoader.load(
//       "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json", // Use an online font URL or replace with local font
//       (font) => {
//         const createText = (text: string, position: [number, number, number]) => {
//           const geometry = new THREE.TextGeometry(text, {
//             font: font,
//             size: 3, // Increased text size
//             height: 0.2,
//           });
//           const material = new THREE.MeshBasicMaterial({ color: "white" });
//           const mesh = new THREE.Mesh(geometry, material);
//           mesh.position.set(...position);
//           scene.add(mesh);
//         };

//         createText("E", [0, 0, 0]);
//         createText("K", [4, 0, 0]);
//         createText("O", [8, 0, 0]);
//         createText("W", [12, 0, 0]);
//       }
//     );

//     camera.position.z = 10; // Adjusted camera position

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     window.addEventListener("resize", () => {
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//     });
//   }, []);

//   return <div ref={sceneRef} style={{ width: "100%", height: "100vh", }} />;
// };

// export default ThreeJsScene;
