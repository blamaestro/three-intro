import gsap from 'gsap';

function setVerticesColor(meshFace, colorSet, newColor) {
  colorSet.setX(meshFace.a, newColor.r);
  colorSet.setY(meshFace.a, newColor.g);
  colorSet.setZ(meshFace.a, newColor.b);

  colorSet.setX(meshFace.b, newColor.r);
  colorSet.setY(meshFace.b, newColor.g);
  colorSet.setZ(meshFace.b, newColor.b);

  colorSet.setX(meshFace.c, newColor.r);
  colorSet.setY(meshFace.c, newColor.g);
  colorSet.setZ(meshFace.c, newColor.b);
  colorSet.needsUpdate = true;
}

export function setInitialVerticesPosition(mesh) {
  const planeVertices = mesh.geometry.attributes.position.array;
  const randomIncrements = [];

  for (let i = 0; i < planeVertices.length; i++) {
    if (i % 3 === 0) {
      const x = planeVertices[i];
      const y = planeVertices[i + 1];
      const z = planeVertices[i + 2];
    
      planeVertices[i] = x + (Math.random() - 0.5) * 3;
      planeVertices[i + 1] = y + (Math.random() - 0.5) * 3;
      planeVertices[i + 2] = z + (Math.random() - 0.5) * 3;
    }

    randomIncrements.push(Math.random() * Math.PI * 2);
  }

  mesh.geometry.attributes.position.originalPosition = mesh.geometry.attributes.position.array;
  mesh.geometry.attributes.position.randomIncrements = randomIncrements;
}

export function moveVertices(mesh, frame) {
  const { array, originalPosition, randomIncrements } = mesh.geometry.attributes.position;

  for (let i = 0; i < array.length; i += 3) {
    array[i] = originalPosition[i] + Math.cos(frame + randomIncrements[i]) * 0.015;
    array[i + 1] = originalPosition[i + 1] + Math.sin(frame + randomIncrements[i + 1]) * 0.015;
  }
  mesh.geometry.attributes.position.needsUpdate = true;
}

export function highlightVertices(planeMesh, raycaster) {
  const intersects = raycaster.intersectObject(planeMesh);
  if (!intersects.length) return;

  const mesh = intersects[0];
  const face = mesh.face;
  const { color } = mesh.object.geometry.attributes;
  const initialColor = { r: 0, g: 0.03, b: 0.15 };
  const hoverColor = { r: 0, g: 0.09, b: 0.45 };

  setVerticesColor(face, color, initialColor);

  gsap.to(hoverColor, {
    r: initialColor.r,
    g: initialColor.g,
    b: initialColor.b,
    onUpdate() {
      setVerticesColor(face, color, hoverColor);
    }
  });
}
