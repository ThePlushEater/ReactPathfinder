import Node from "./node";

export default class Start extends Node {
  constructor(args) {
    super(args);
    this.color = "rgba(191, 63, 63, 1)";
    this.padding = args.padding ? args.padding : this.width * 0.15;
    this.zIndex = 3;
  }
  render(context) {
    // Draw
    context.save();
    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.arc(0, 0, this.width / 2 - this.padding, 0, 2 * Math.PI);
    // context.moveTo(-this.width / 2 + this.padding, -this.height / 2 + this.padding);
    // context.lineTo(this.width / 2 - this.padding, -this.height / 2 + this.padding);
    // context.lineTo(this.width / 2 - this.padding, this.height / 2 - this.padding);
    // context.lineTo(-this.width / 2 + this.padding, this.height / 2 - this.padding);
    context.closePath();

    context.fillStyle = this.color;
    context.fill();

    context.restore();
  }
  toString() {
    return this.coords.x + "," + this.coords.y;
  }
}
