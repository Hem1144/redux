import { getAccUserFulfilled,getAccUserPending,getAccUserRejected,inc ,dec,incByAmount} from "../actions";
export function accountReducer(state = { amount: 1 }, action) {
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