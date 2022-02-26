const defaultState = {
  loggedIn: false,
  username: "",
};

const userReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "SET_USER":
      return {
        loggedIn: true,
        username: action.payload,
      };
    case "LOG_OUT": {
      return {
        loggedIn: false,
        username: "",
      };
    }
    default:
      return state;
  }
};

export default userReducer;
