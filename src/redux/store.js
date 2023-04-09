import { createStore } from "redux";

const initialState = {
  animate: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ANIMATE":
      return { ...state, animate: action.payload };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
