import * as THREE from 'three';

function setDirectionalLight(scene, x = 0, y = 0, z = 0) {
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(x, y, z);
  scene.add(light);
}

export function setSceneLighting(scene) {
  setDirectionalLight(scene, 0, 1, 1);
  setDirectionalLight(scene, 0, 1, -1);
}
