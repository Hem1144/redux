import { axios } from "axios";
//* actions name Constants
// const init = "account/init";
export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmount = "account/incrementByAmount";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulfilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";
export const incBonus = "bonus/increment";

export function getUserAccount(id) {
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

export function getAccountUserFulfilled(value) {
  return { type: getAccUserFulfilled, payload: value };
}
export function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}
export function getAccountUserPending() {
  return { type: getAccUserPending };
}
export function increment() {
  return { type: inc };
}

export function decrement() {
  return { type: dec };
}

export function incrementByAmount(value) {
  return { type: incByAmount, payload: value };
}
export function incrementBonus(value) {
  return { type: incBonus };
}
