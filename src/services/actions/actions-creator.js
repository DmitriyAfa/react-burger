import {
  CLOSE_MODAL_OF_ORDER_DETAILS,
  CLEAR_ORDER_DETAILS,
  ADD_BUN,
  MAKE_BUN_QTY_ZERO,
} from "./burger-constructor";

export const closeModalOfOrderDetails = () => {
  return {
    type: CLOSE_MODAL_OF_ORDER_DETAILS,
  };
};
export const clearOrderDetails = () => {
  return {
    type: CLEAR_ORDER_DETAILS,
  };
};
export const addBun = (ingredient) => {
  return {
    type: ADD_BUN,
    ...ingredient,
  };
};
export const makeBunQtyZero = () => {
  return {
    type: MAKE_BUN_QTY_ZERO,
  };
};
