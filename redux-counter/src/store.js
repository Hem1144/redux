import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import counterReducer from "./reducers/counterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
