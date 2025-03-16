"use client";
import Cookie from "cookie-universal";
import GetUserInfo from "./GetUserInfo";
import { createContext, useReducer } from "react";

// Action types as constants to prevent typos
const ActionTypes = {
  LOGIN_USER: "LOGIN_USER",
  USER_INFO: "USER_INFO",
  LOG_OUT: "LOG_OUT",
  ERROR: "ERROR",
};

const cookie = Cookie();

const getUserFromStorage = () => {
  if (typeof window === "undefined") return null;
  try {
    return JSON.parse(localStorage.getItem("userInfo")) || null;
  } catch (error) {
    console.error("Error reading user info from localStorage:", error);
    return null;
  }
};

const initialState = {
  user: getUserFromStorage(),
  token: cookie.get("token") || null,
  error: {},
};

export const UserContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const updateUserInfo = (info) => {
  try {
    localStorage.setItem("userInfo", JSON.stringify(info));
  } catch (error) {
    console.error("Error saving user info to localStorage:", error);
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN_USER: {
      const { accessToken } = action.payload;
      cookie.set("token", accessToken);

      // Get user info after login
      GetUserInfo(accessToken).then(updateUserInfo);

      return {
        ...state,
        user: action.payload,
        token: accessToken,
      };
    }

    case ActionTypes.USER_INFO: {
      return GetUserInfo(state.token).then((info) => {
        if (info.message) {
          cookie.removeAll();
          return state;
        }
        updateUserInfo(info);
        return {
          ...state,
          user: info,
        };
      });
    }

    case ActionTypes.LOG_OUT: {
      cookie.removeAll();
      localStorage.removeItem("userInfo");
      return {
        ...state,
        user: null,
        token: null,
        error: {},
      };
    }

    case ActionTypes.ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
