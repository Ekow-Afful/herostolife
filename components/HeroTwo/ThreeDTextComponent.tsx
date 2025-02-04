// "use client";

// import { useEffect, useRef, useState } from "react";
// import * as THREE from "three";
// import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

// const ThreeDTextComponent: React.FC = () => {
//   const mountRef = useRef<HTMLDivElement>(null);
//   const [mouse, setMouse] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     // Add lighting
//     const light = new THREE.AmbientLight(0x404040, 1); // Ambient light
//     scene.add(light);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//     directionalLight.position.set(5, 5, 5).normalize();
//     scene.add(directionalLight);

//     // Load font and create 3D letters
//     const loader = new FontLoader();
//     loader.load("/path/to/font.json", (font) => {
//       const letters = ["E", "K", "O", "W"];
//       const textMeshes: THREE.Mesh[] = [];

//       letters.forEach((letter, index) => {
//         const geometry = new THREE.TextGeometry(letter, {
//           font: font,
//           size: 10,
//           height: 1,
//         });
//         const material = new THREE.MeshStandardMaterial({ color: 0x808080 }); // Gray color
//         const textMesh = new THREE.Mesh(geometry, material);

//         scene.add(textMesh);
//         textMesh.position.set(
//           Math.random() * 20 - 10,
//           Math.random() * 20 - 10,
//           Math.random() * 20 - 10
//         ); // Random initial positions
//         textMeshes.push(textMesh);
//       });

//       camera.position.z = 50; // Set camera closer to the objects

//       // Animation loop
//       const animate = () => {
//         requestAnimationFrame(animate);

//         textMeshes.forEach((textMesh) => {
//           textMesh.rotation.x += 0.01;
//           textMesh.rotation.y += 0.01;

//           // Move letters based on mouse position
//           textMesh.position.x += (mouse.x * 10 - textMesh.position.x) * 0.05;
//           textMesh.position.y += (-mouse.y * 10 - textMesh.position.y) * 0.05;
//         });

//         renderer.render(scene, camera);
//       };

//       animate();
//     });

//     // Resize handler
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [mouse]);

//   // Mouse move tracking
//   const handleMouseMove = (event: MouseEvent) => {
//     const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//     const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
//     setMouse({ x: mouseX, y: mouseY });
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <div ref={mountRef} style={{ width: "100%", height: "100vh", position: "absolute" }} />
//   );
// };

// export default ThreeDTextComponent;
