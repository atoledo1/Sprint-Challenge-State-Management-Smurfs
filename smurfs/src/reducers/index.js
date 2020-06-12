import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import smurfsReducer from "./smurfsReducer";

export default combineReducers({
  form: formReducer,
  smurfs: smurfsReducer,
});
