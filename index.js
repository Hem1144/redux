import { createStore } from "redux";

//* srore
const store = createStore(reducer);

//* reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    //* immutability => new copy of object
    return { amount: state.amount + 1 };
  }
  return state;
}

//! global state
console.log(store.getState());

store.dispatch({ type: "increment" });

console.log(store.getState());
