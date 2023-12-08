import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";

// Constants
const init = "init";
const inc = "increment";
const dec = "decrement";
const incByAmount = "incrementByAmount";

// Store with middleware
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

// Reducer function
function reducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

// async function getUser() {
// Return a function that accepts dispatch
// const { data } = await axios.get("http://localhost:3000/accounts/1");
// console.log(data, "checking data");
// dispatch(initUser(data.amount)); // Dispatch the action inside this function
// }
// getUser();

//* Action creators (it is synchronous)
function getUser(id) {
  return async (dispatch, getState) => {
    //! can not make async action like this
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount));
  };
}

function initUser(value) {
  return { type: init, payload: value };
}
function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}

setTimeout(() => {
  store.dispatch(getUser(2));
}, 3000);
