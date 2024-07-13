import * as THREE from 'three';

import {
  scene,
  camera,
  renderer,
  raycaster,
} from './scene';

import {
  moveVertices,
  highlightVertices,
  setInitialVerticesPosition,
} from './utils/vertices';
import { setMeshColor } from './utils/meshes';

import { initGUI } from './gui';
import options from './constants';
import { planeMesh } from './meshes';
import { setSceneLighting } from './lighting';
import { mouse } from './mouse';

let frame = 0;

initGUI(generatePlane);

function generatePlane() {
  planeMesh.geometry.dispose();
  planeMesh.geometry = new THREE.PlaneGeometry(
    options.plane.width,
    options.plane.height,
    options.plane.widthSegments,
    options.plane.heightSegments
  );

  setInitialVerticesPosition(planeMesh);
  setMeshColor(planeMesh);
}

function animate() {
  requestAnimationFrame(animate);
  frame += 0.01;

  renderer.render(scene, camera);
  raycaster.setFromCamera(mouse, camera);

  moveVertices(planeMesh, frame);
  highlightVertices(planeMesh, raycaster);
}

function main() {
  scene.add(planeMesh);
  
  setInitialVerticesPosition(planeMesh);
  setMeshColor(planeMesh);
  
  setSceneLighting(scene);

  animate();
}

main();
