import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";

const rootReducer = combineReducers({
    todos,
});

const store = legacy_createStore(rootReducer);

export default store;
