// import * as THREE from "three";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// import { metalness, roughness } from "three/webgpu";
// import { RGBELoader } from "three/examples/jsm/Addons.js";
// import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );
// const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
// directionalLight.position.set(5, 5, 5);
// // scene.add( directionalLight );
// const helper = new THREE.DirectionalLightHelper(directionalLight, 5);
// // scene.add( helper );
// const ambientLight = new THREE.AmbientLight(0xffffff, 1);
// // scene.add(ambientLight);
// const geometry = new THREE.BoxGeometry(5, 5, 5);
// const material = new THREE.MeshStandardMaterial({
//   color: 0x00ff00,
//   metalness: 0.2,
//   roughness: 0.1,
// });
// const cube = new THREE.Mesh(geometry, material);
// // scene.add(cube);

// camera.position.z = 10;
// camera.position.x = 10;
// camera.position.y = 10;
// const canvas = document.querySelector("#canvas");
// const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);

// window.addEventListener("resize", () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// });

// const rgbeloader = new RGBELoader();
// rgbeloader.load("./assets/rogland_moonlit_night_4k.hdr", (texture) => {
//   texture.mapping = THREE.EquirectangularReflectionMapping;
//   scene.environment = texture;
//   // scene.background = texture;
// });
// const gltfloader = new GLTFLoader();
// gltfloader.load("./assets/mclaren-2.glb", (gltf) => {
//   scene.add(gltf.scene);
// });
// // const controls = new OrbitControls(camera, renderer.domElement);
// // controls.enableDamping = true;
// // controls.autoRotate = true;
// // controls.autoRotateSpeed = 20.0;
// // controls.dampingFactor = 0.05;
// // controls.enableZoom = true;
// function clampCameraPosition(position) {
//   const minBounds = new THREE.Vector3(-100, 1, -100);
//   position.x = Math.max(position.x, minBounds.x);
//   position.y = Math.max(position.y, minBounds.y);
//   position.z = Math.max(position.z, minBounds.z);
// }
// function animate() {
//   window.requestAnimationFrame(animate);
//   renderer.render(scene, camera);
//   // clampCameraPosition(camera.position);
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//   // console.log(camera.position);
//   controls.update();
// }

// // const tl = gsap.timeline();

// // // First transition
// // tl.to(camera.position, {
// //     z: 10,
// //     x: 10,
// //     y: 10,
// //     duration: 2,
// // })
// // .to(camera.position, {
// //     z: 0.46,
// //     x: 5.5,
// //     y: 1,
// //     duration: 2,
// // })
// // .to(camera.position, {
// //     z: 5.9,
// //     x: -0.47,
// //     y: 1,
// //     duration: 2,
// // })
// // .to(camera.position, {
// //     z: 3.49,
// //     x: -3.87,
// //     y: 1.09,
// //     duration: 2,
// // })
// // .to(camera.position, {
// //   z: -5.076,
// //   x: -2.197,
// //   y: 1.11,
// //   duration: 2,
// // })
// // .to(camera.position, {
// //     z: 0.46,
// //     x: 5.5,
// //     y: 1,
// //     duration: 2,
// // });
// animate();



// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/Addons.js';
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const geo = new THREE.IcosahedronGeometry(5.0,2);
// const mat = new THREE.MeshStandardMaterial({
//   color: 0xccff,
//   flatShading: true
// });
// const mesh = new THREE.Mesh(geo,mat);
// scene.add(mesh);

// const wireMat = new THREE.MeshBasicMaterial({
//   color: 0xffffff,
//   wireframe: true,
// });
// const wireMesh = new THREE.Mesh(geo,wireMat);
// wireMesh.scale.setScalar(1.0001);
// mesh.add(wireMesh);

// const hemilight = new THREE.HemisphereLight(0xffffff,0x000000,5);
// scene.add(hemilight);

// camera.position.z = 10;
// const canvas = document.querySelector("#canvas");
// const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
// renderer.setSize( window.innerWidth, window.innerHeight );
// window.addEventListener("resize", () => {
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// });
// const orbitControls = new OrbitControls(camera,renderer.domElement);
// orbitControls.autoRotate = true;
// orbitControls.enableDamping = true;
// orbitControls.dampingFactor = 0.005;
// function animate() {
//   window.requestAnimationFrame(animate);
// 	renderer.render( scene, camera );
//   orbitControls.update();
// }
// animate();

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import {getFresnelMat} from './getFresnelMat.js';
import getStarfield from './getStarfield.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const textureLoader = new THREE.TextureLoader();




const earthGroup = new THREE.Group();
earthGroup.rotateZ(-23.4*Math.PI/180);
scene.add(earthGroup);
const geo = new THREE.IcosahedronGeometry(5,24);
const mat = new THREE.MeshStandardMaterial({
  map: textureLoader.load("./assets/00_earthmap4k.jpg"),
});
const mesh = new THREE.Mesh(geo,mat);
earthGroup.add(mesh);



const lightMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/03_earthlights1k.jpg'),
  blending: THREE.SubtractiveBlending,
  // transparent: true,
  opacity: 0.8,
});
const lightMesh = new THREE.Mesh(geo,lightMat);
lightMesh.scale.setScalar(1.001,1.001,1.001);
earthGroup.add(lightMesh);



// const cloudMat = new THREE.MeshStandardMaterial({
//   map: textureLoader.load('./assets/05_earthcloudmaptrans.jpg'),
//   blending: THREE.AdditiveBlending,
//   transparent: true,
//   opacity: 0.5,
// });
const cloudMat = new THREE.MeshStandardMaterial({
  map: textureLoader.load('./assets/04_earthcloudmap.jpg'),
  transparent: true,
  opacity: 0.5,
  alphaMap: textureLoader.load('./assets/04_earthcloudmap.jpg'),
  side: THREE.DoubleSide,
  depthWrite: false,
});
const cloudMesh = new THREE.Mesh(geo,cloudMat);
cloudMesh.scale.setScalar(1.003,1.003,1.003);
earthGroup.add(cloudMesh);

const stars = getStarfield({numStars:2000});
scene.add(stars);


const fresnelMat = new getFresnelMat();
const glowMesh = new THREE.Mesh(geo,fresnelMat);
glowMesh.scale.setScalar(1.001);
earthGroup.add(glowMesh);


const ambientLight = new THREE.AmbientLight(0xffffff,0.05);
scene.add(ambientLight);

const sunlight = new THREE.DirectionalLight(0xffffff,3);
sunlight.position.set(-2,0.5,1.5);
scene.add(sunlight);

camera.position.z = 15;
const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
const orbitControls = new OrbitControls(camera,renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.005;
function animate() {
  window.requestAnimationFrame(animate);
	renderer.render( scene, camera );
  mesh.rotation.y += 0.005;
  lightMesh.rotation.y += 0.005;
  cloudMesh.rotation.y += 0.0075;
  glowMesh.rotation.y += 0.005;
  stars.rotation.y += 0.001;
  orbitControls.update();
}
animate();