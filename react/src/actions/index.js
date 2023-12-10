import { axios } from "axios";
//* actions name Constants
// const init = "account/init";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmount = "account/incrementByAmount";
const getAccUserPending = "account/getUser/pending";
const getAccUserFulfilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";
const incBonus = "bonus/increment";

function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getAccountUserPending());

      const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
      dispatch(getAccountUserFulfilled(data.amount));
    } catch (error) {
      dispatch(getAccountUserRejected(error.message));
    }
  };
}

function getAccountUserFulfilled(value) {
  return { type: getAccUserFulfilled, payload: value };
}
function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}
function getAccountUserPending() {
  return { type: getAccUserPending };
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
