import { combineReducers } from "redux";
import { ProductsReducer, cartReducer, usersReducer } from "./productsReducers";

const reducers = combineReducers({
  allProducts: ProductsReducer,
  cartReducer: cartReducer,
  UsersReducer : usersReducer,
});

export default reducers;
