import { actionTypes } from "../actions/actionType";
import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const setProducts = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const AddToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};

export const DeleteFromCart = (product) => {
  return {
    type: actionTypes.DEL_ITEM,
    payload: product,
  };
};

export const addQty = (id, qty) => {
  return {
    type: actionTypes.ADD_QTY,
    payload: {
      id: id,
      qty: qty,
    },
  };
};

export const addSize = (id, size) => {
  return {
    type: actionTypes.ADD_SIZE,
    payload: {
      id: id,
      size: size,
    },
  };
};

export const removeAll = () => {
  return {
    type: actionTypes.REMOVE_ALL,
  };
};

export const signUp = (users) => {
  return {
    type: actionTypes.SIGN_UP,
    payload: users,
  };
};

export const logIn = (user) => {
  return {
    type: actionTypes.LOGIN,
    payload: user,
  };
};

export const logOut = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const useFetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          const data = response.data;
          dispatch(setProducts(data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [dispatch]);
};

export const useFetchDataProductId = (productId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .then((response) => {
          const data = response.data;
          dispatch(selectedProduct(data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, productId]);
};
