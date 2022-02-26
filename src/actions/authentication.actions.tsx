import { BASE_URL } from "../constants/Constants";

const setUser = (payload: any) => ({ type: "SET_USER", payload });
const logOut = (payload: any) => ({ type: "LOG_OUT", payload });

/* Store user action*/
export const storeUser = (username: any) => (dispatch: any) => {
  dispatch(setUser(username));
};
