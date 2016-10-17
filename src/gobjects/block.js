import Node from "./node";

export default class Block extends Node {
  constructor(args) {
    super(args);
    this.color = "rgba(134, 134, 121, 1)";
  }
  toString() {
    return this.coords.x + "," + this.coords.y;
  }
}
