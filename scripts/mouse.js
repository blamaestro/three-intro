class MouseController {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    window.addEventListener('mousemove', this.updatePosition);
  }

  updatePosition = mouseEvent => {
    this.x = (mouseEvent.x / innerWidth) * 2 - 1;
    this.y = -(mouseEvent.y / innerHeight) * 2 + 1;
  }
}

export const mouse = new MouseController();
