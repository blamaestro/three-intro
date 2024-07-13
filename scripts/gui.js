import * as dat from 'dat.gui';

import options from './constants';

const gui = new dat.GUI();

export function initGUI(updateScene) {
  gui.add(options.plane, 'width', 1, 500).onChange(updateScene);
  gui.add(options.plane, 'height', 1, 500).onChange(updateScene);
  gui.add(options.plane, 'widthSegments', 1, 100).onChange(updateScene);
  gui.add(options.plane, 'heightSegments', 1, 100).onChange(updateScene);
}
