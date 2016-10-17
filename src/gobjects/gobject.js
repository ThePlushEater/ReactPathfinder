export default class GObject {
  constructor(args) {
    this.position = args.position;
    this.width = args.width ? args.width : 8;
    this.height = args.height ? args.height : 8;
    this.color = "rgba(0, 0, 0, 0.5)";
    this.removed = false;
    this.children = [];
    this.zIndex = 0;
  }
  isPointInPath(context, point) {
    if (this.removed) {
      return null;
    }
    context.save();
    context.translate(this.position.x, this.position.y);
    context.beginPath();
    context.moveTo(-this.width / 2, -this.height / 2);
    context.lineTo(this.width / 2, -this.height / 2);
    context.lineTo(this.width / 2, this.height / 2);
    context.lineTo(-this.width / 2, this.height / 2);
    context.closePath();

    let result = null;
    if (context.isPointInPath(point.x, point.y)) {
        // hit test succeeded, handle the click event!
        result = this;
    }
    context.restore();
    return result;
  }
  destroy() {
    this.removed = true;
  }
  toString() {
    return "GObject (" + this.coords.x + ", " + this.coords.y + ")";
  }
  update() {
    this.children = this.children.filter(function(child) {
      return !child.removed;
    });
    this.children.forEach((child) => {
      child.update();
    });
  }
  render(context) {
    // if (!this.removed) {
    //   // Draw.
    //   context.save();
    //
    //   context.translate(this.position.x, this.position.y);
    //   context.beginPath();
    //   context.moveTo(-this.width / 2, 0);
    //   context.lineTo(this.width / 2, 0);
    //   context.moveTo(0, -this.height / 2);
    //   context.lineTo(0, this.height / 2);
    //   context.closePath();
    //
    //   context.strokeStyle = this.color;
    //   context.lineWidth = 1;
    //   context.stroke();
    //
    //   context.restore();
    // }
  }
}
