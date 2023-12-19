import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

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
    case getAccUserFulfilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };
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

setTimeout(() => {
  store.dispatch(getUserAccount(2));
  // store.dispatch(incrementByAmount(300));
  // store.dispatch(incrementBonus());
}, 3000);
