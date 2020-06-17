import reducer from "./reducer";

function createStore() {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    // Call the reducer to get the new state
    // Notify the subcribers
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
    state = reducer(state, action);
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  return {
    subscribe,
    dispatch,
    getState,
  };
}

export default createStore(reducer);
