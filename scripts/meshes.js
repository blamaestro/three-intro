import * as THREE from 'three';

import options from './constants';

const planeGeometry = new THREE.PlaneGeometry(
  options.plane.width,
  options.plane.height,
  options.plane.widthSegments,
  options.plane.heightSegments,
);
const planeMaterial = new THREE.MeshPhongMaterial({
  side: THREE.DoubleSide,
  flatShading: true,
  vertexColors: true,
});
export const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
