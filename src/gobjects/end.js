import Node from "./node";

export default class End extends Node {
  constructor(args) {
    super(args);
    this.color = "rgba(191, 64, 170, 1)";
    this.padding = args.padding ? args.padding : this.width * 0.2;
    this.lineWidth = args.lineWidth ? args.lineWidth : this.width * 0.2;
    this.zIndex = 4;
  }
  render(context) {
    // Draw
    context.save();

    context.strokeStyle = this.color;
    context.lineWidth = this.lineWidth;

    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.moveTo(-this.width / 2 + this.padding, this.height / 2 - this.padding);
    context.lineTo(this.width / 2 - this.padding, -this.height / 2 + this.padding);
    context.moveTo(-this.width / 2 + this.padding, -this.height / 2 + this.padding);
    context.lineTo(this.width / 2 - this.padding, this.height / 2 - this.padding);

    context.closePath();
    context.stroke();

    context.restore();
  }
  toString() {
    return this.coords.x + "," + this.coords.y;
  }
}
