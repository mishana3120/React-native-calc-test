import { CHANGE_DISPLAY_RESULT } from "./constants";

export const changeResult = (payload) => ({
  type: CHANGE_DISPLAY_RESULT,
  payload,
});
