import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';

import options from './constants';

export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(
  options.camera.FOV,
  innerWidth / innerHeight,
  options.camera.clipping.near,
  options.camera.clipping.far,
);
camera.position.z = 50;

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

export const raycaster = new THREE.Raycaster();

new OrbitControls(camera, renderer.domElement);
