import * as THREE from 'three';

export function setMeshColor(mesh) {
  const vertexCount = mesh.geometry.attributes.position.count;
  const colors = Array(vertexCount).fill([0, 0.03, 0.15]).flat();
  
  mesh.geometry.setAttribute('color', new THREE.Float32BufferAttribute(
    colors, 3
  ));
}
