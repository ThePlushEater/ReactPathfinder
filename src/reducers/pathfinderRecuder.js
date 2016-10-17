export default function reducer(state={
  fetching: false,
  fetched: false,
  error: null,
  dimension: {
    x: 0,
    y: 0
  },
  start: {
    x: 0,
    y: 0
  },
  end: {
    x: 0,
    y: 0
  },
  step: 0
}, action) {
  switch (action.type) {
    case "FETCH_PATHFINDER_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_PATHFINDER_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_PATHFINDER_FULFILLED" : {
      return {...state, fetching: false, fetched: true, dimension: action.payload.data.dimension, start: action.payload.data.start, end: action.payload.data.end, step: action.payload.data.step}
    }
    case "SET_PATHFINDER_START" : {
      return {...state, start: action.payload}
    }
    case "SET_PATHFINDER_END" : {
      return {...state, end: action.payload}
    }
    case "INCREASE_PATHFINDER_STEP" : {
      let step = parseInt(state.step) + 1;
      return {...state, step: step}
    }
    case "DECREASE_PATHFINDER_STEP" : {
      let step = Math.max(parseInt(state.step) - 1, 0);
      return {...state, step: step}
    }
    case "RESET_PATHFINDER_STEP" : {
      return {...state, step: 0}
    }
  }
  return state;
};
