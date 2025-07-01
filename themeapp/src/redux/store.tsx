// import { configureStore } from "@reduxjs/toolkit";
// import themeReducer from "./themeSlice";
// const store = configureStore({
//   reducer: {
//     theme: themeReducer,
//   },
// });
// export default store;

import { combineReducers, createStore } from "redux";
import themeReducer from "./themeSlice";

const rootReducer = combineReducers({
  themeReducer,
});

const store = createStore(rootReducer);

export default store;
