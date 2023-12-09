import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";

// Constants
const init = "account/init";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmount = "account/incrementByAmount";
const incBonus = "bonus/increment";

// Store with middleware
const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
);

// Reducer function
function accountReducer(state = { amount: 1 }, action) {
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

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };
    case incByAmount:
      if (action.payload >= 100) return { points: state.points + 1 };
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
function getUserAccount(id) {
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
function incrementBonus(value) {
  return { type: incBonus };
}

setTimeout(() => {
  store.dispatch(getUserAccount(2));
  // store.dispatch(incrementByAmount(300));
  // store.dispatch(incrementBonus());
}, 3000);
