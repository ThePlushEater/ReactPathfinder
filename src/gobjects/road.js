import Node from "./node";

export default class Road extends Node {
  constructor(args) {
    super(args);
    this.color = "rgba(221, 213, 213, 1)";
    this.fontSize = this.width * 0.25;
  }
  toString() {
    return this.coords.x + "," + this.coords.y;
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

    if (this.step) {
      context.fillStyle = "#000000"
      context.font = this.fontSize + "px Open Sans";
      context.textAlign = "center";
      context.fillText(this.step, 0, this.fontSize * 0.25);
    }

    context.restore();
  }
}
