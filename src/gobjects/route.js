import GObject from "./gobject";

export default class Route extends GObject {
  constructor(args) {
    super(args);
    this.padding = args.padding ? args.padding : 2;
    this.zIndex = 2;
    this.path = args.path;
    this.color = "rgba(255, 255, 255, 0.5)";
    this.lineWidth = this.width * 0.5;
  }
  isPointInPath(context, point) {
    return null;
  }

  update() {
    super.update();
  }

  render(context) {
    // Draw
    context.save();
    context.translate(this.position.x, this.position.y);
    context.beginPath();
    this.path.forEach((item, index) => {
      if (index == 0) {
        context.moveTo(this.width / 2 + this.width * item.coords.x, this.height / 2 + this.height * item.coords.y);
      } else {
        context.lineTo(this.width / 2 + this.width * item.coords.x, this.height / 2 + this.height * item.coords.y);
      }
    });

    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;
    context.stroke();

    context.restore();
    // // Draw
    // context.save();
    // context.translate(this.position.x, this.position.y);
    // context.beginPath();
    // context.moveTo(-this.width / 2 + this.padding, -this.height / 2 + this.padding);
    // context.lineTo(this.width / 2 - this.padding, -this.height / 2 + this.padding);
    // context.lineTo(this.width / 2 - this.padding, this.height / 2 - this.padding);
    // context.lineTo(-this.width / 2 + this.padding, this.height / 2 - this.padding);
    // context.closePath();
    //
    // context.fillStyle = this.color;
    // context.fill();
    //
    // context.restore();
  }

  toString() {
    return "Path (" + this.coords.x + ", " + this.coords.y + ")";
  }
}
