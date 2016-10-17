import axios from "axios";

import serverConfig from "./../config/server";

export function fetchPathfinderSetup() {
  let file = "pathfinder-setup-1.json";
  return {
    type: "FETCH_PATHFINDER",
    payload: axios.get(location.origin + serverConfig.uData + file),
  }
}
