import { CHANGE_DISPLAY_RESULT } from "./constants";

const Result = {
  result: "0",
};

export const calcReducer = (state = Result, action) => {
  switch (action.type) {
    case CHANGE_DISPLAY_RESULT:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
};
