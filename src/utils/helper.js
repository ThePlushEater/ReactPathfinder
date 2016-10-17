import GObject from "./../gobjects/gobject";
import Road from "./../gobjects/road";
import Block from "./../gobjects/block";

export function findGObjectsByMouse(context, object, mouse) {
  let result = [];
  if (object && object.isPointInPath) {
    let temp = object.isPointInPath(context, mouse);
    if (temp) {
      result.push(temp);
    }
  }
  if (object) {
    for (let i = 0; i < object.children.length; i++) {
      let temp = findGObjectsByMouse(context, object.children[i], mouse);
      if (temp) {
        result = result.concat(temp);
      }
    }
  }
  return result;
}

export function gatherRenderableGObjects(object) {
  let result = [];
  if (object) {
    result.push(object);
    for (let i = 0; i < object.children.length; i++) {
      let temp = gatherRenderableGObjects(object.children[i]);
      if (temp) {
        result = result.concat(temp);
      }
    }
  }
  return result;
}

export function getNeightborRoads(object, list) {
  let result = [];
  list.forEach((item, index) => {
    if (item instanceof Road) {
      if ((item.coords.x-1) == object.coords.x && (item.coords.y) == object.coords.y) {
        result.push(item);
      } else if ((item.coords.x+1) == object.coords.x && (item.coords.y) == object.coords.y) {
       result.push(item);
     } else if ((item.coords.x) == object.coords.x && (item.coords.y-1) == object.coords.y) {
       result.push(item);
     } else if ((item.coords.x) == object.coords.x && (item.coords.y+1) == object.coords.y) {
       result.push(item);
     }
    }
  });
  return result;
}

export function resetRoadSteps(object) {
  if (object) {
    if (object instanceof Road) {
      object.step = 0;
    }
    for (let i = 0; i < object.children.length; i++) {
      resetRoadSteps(object.children[i]);
    }
  }
}
