import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { FirstReducer } from "../Reducers/FirstReducer";
import FormOneReducer from "../../Form/FormOneReducer";
import FormTwoReducer from "../../Form/FormTwoReducer";
import FormThreeReducer from "../../Form/FormThreeReducer";

export const ConfigureStore = () => {
  // First reducer is key as well as value of an object
  return legacy_createStore(
    combineReducers({
      // FirstReducer,
      FormOneReducer,
      FormTwoReducer,
      FormThreeReducer,
    }),
    composeWithDevTools()
  );
};
