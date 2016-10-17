import axios from "axios";

import serverConfig from "./../config/server";

export function fetchPathfinderSetup() {
  let host;
  if (location.pathname == "/") {
    host = location.origin
  } else {
    host = location.origin + location.pathname;
  }
  let file = "pathfinder-setup-1.json";
  return {
    type: "FETCH_PATHFINDER",
    payload: axios.get(host + serverConfig.uData + file),
  }
}
