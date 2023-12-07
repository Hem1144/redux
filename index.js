import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//* srore
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

//* reducer
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    //* immutability => new copy of object
    return { amount: state.amount + 1 };
  }
  return state;
}

//! global state
// store.subscribe(() => {
//   history.push(store.getState());
//   console.log(history);
// });

setInterval(() => {
  store.dispatch({ type: "increment" });
}, 5000);
