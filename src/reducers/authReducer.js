import { AUTH_TYPES } from "../constants/authTypes";

const { CHANGE_PASSWORD, SET_NEW_PWD, SET_CONFIRM_PWD } = AUTH_TYPES;

const INITIAL_STATE = {
  newPassword: "",
  confirmPassword: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NEW_PWD:
      return {
        ...state,
        newPassword: action.payload,
      };
    case SET_CONFIRM_PWD:
      return {
        ...state,
        confirmPassword: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
