import { ActionTypes } from "../constants/action-types";

const initState = {
  products: [
    {
      id: 1,
      title: "Dipesh",
      category: "Programmer",
    },
  ],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
