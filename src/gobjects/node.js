import GObject from "./gobject";

export default class Node extends GObject {
  constructor(args) {
    super(args);
    this.coords = args.coords;
    this.padding = args.padding ? args.padding : 1;
    this.zIndex = 1;
    this.step = 0;
  }
  isPointInPath(context, point) {
    if (this.removed) {
      return null;
    }
    context.save();
    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.moveTo(-this.width / 2 + this.padding, -this.height / 2 + this.padding);
    context.lineTo(this.width / 2 - this.padding, -this.height / 2 + this.padding);
    context.lineTo(this.width / 2 - this.padding, this.height / 2 - this.padding);
    context.lineTo(-this.width / 2 + this.padding, this.height / 2 - this.padding);
    context.closePath();

    let result = null;
    if (context.isPointInPath(point.x, point.y)) {
        // hit test succeeded, handle the click event!
        result = this;
    }

    context.restore();
    return result;
  }

  update() {
    super.update();
  }

  render(context) {
    // Draw
    context.save();
    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.moveTo(-this.width / 2 + this.padding, -this.height / 2 + this.padding);
    context.lineTo(this.width / 2 - this.padding, -this.height / 2 + this.padding);
    context.lineTo(this.width / 2 - this.padding, this.height / 2 - this.padding);
    context.lineTo(-this.width / 2 + this.padding, this.height / 2 - this.padding);
    context.closePath();

    context.fillStyle = this.color;
    context.fill();

    context.restore();
  }

  toString() {
    return "Node (" + this.coords.x + ", " + this.coords.y + ")";
  }
}
