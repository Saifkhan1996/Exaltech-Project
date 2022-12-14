import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { NavigationReducer } from "../ReduxState/Reducers/NavigationReducer";
import { carouselReducer } from "../ReduxState/Reducers/CarouselReducer";
import { CourseReducer } from "./Reducers/CoureseReducer";
import { FooterReducer } from "./Reducers/FooterReducer";

export const myStore = () => {
  return legacy_createStore(
    combineReducers({
      NavigationReducer,
      carouselReducer,
      CourseReducer,
      FooterReducer,
    }),
    composeWithDevTools()
  );
};
