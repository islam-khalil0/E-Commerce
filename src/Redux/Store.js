import { createStore } from "redux";
import reducers from "./reducers/index";
import { saveState } from "./reducers/productsReducers";
import throttle from "lodash.throttle";

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(
//   throttle(() => {
//     saveState(store.getState());
//   }),
//   2000
// );

export default store;
