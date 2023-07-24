import { actionTypes } from "../actions/actionType";

// export const LoadState = () => {
//   try {
//     const getState = localStorage.getItem("reduxState");
//     if (getState === null) {
//       return {
//         ...productsInitialState,
//         ...cartInitialState,
//         ...usersInitialState,
//       };
//     }
//     return JSON.parse(getState);
//   } catch (e) {
//     console.log(e);
//     return {
//       ...productsInitialState,
//       ...cartInitialState,
//       ...usersInitialState,
//     };
//   }
// };

// const productsInitialState = {
//   products: [],
// };

// const cartInitialState = {
//   cart: [],
// };

// const usersInitialState = {
//   users: [],
//   user: null,
// };

const initialState = {
  products: [],
  cart: [],
  users: [],
};

// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem("reduxState", serializedState);
//   } catch (e) {
//     console.log(e);
//   }
// };

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case actionTypes.SELECTED_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };

    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const exist = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exist !== -1) {
        const updatedCart = state.cart.map((item, index) =>
          index === exist ? { ...item, qty: item.qty + 1 } : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }],
        };
      }
    case actionTypes.ADD_QTY:
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
      return {
        ...state,
        cart: updatedCart,
      };
    case actionTypes.ADD_SIZE:
      const updatedCart2 = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, size: action.payload.size }
          : item
      );
      return {
        ...state,
        cart: updatedCart2,
      };

    case actionTypes.DEL_ITEM:
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.cart[existingItemIndex];
      if (existingItem.qty === 1) {
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      } else {
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex ? { ...item, qty: item.qty - 1 } : item
        );
        return {
          ...state,
          cart: updatedCart,
        };
      }

    case actionTypes.REMOVE_ALL:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SIGN_UP:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
      };

    case actionTypes.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
