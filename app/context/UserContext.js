"use client";
import Cookie from "cookie-universal";
import GetUserInfo from "./GetUserInfo";
const { createContext, useReducer } = require("react");

const cookie = Cookie();

const initialState = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  token: cookie.get("token") || null,
  error: {},
};

export const UserContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      cookie.set("token", action.payload.accessToken);
      GetUserInfo(action.payload.accessToken).then((info) => {
        localStorage.setItem("userInfo", JSON.stringify(info));
      });
      return {
        ...state,
        user: action.payload,
        token: action.payload.accessToken,
      };
    case "USER_INFO":
      GetUserInfo(state.token).then((info) => {
        // if (info.message) {
        //   cookie.removeAll();
        //   return;
        // }
        localStorage.setItem("userInfo", JSON.stringify(info));
        return {
          ...state,
          user: info,
        };
      });
    case "LOG_OUT":
      cookie.removeAll();
      localStorage.removeItem("userInfo");
      return {
        ...state,
        user: null,
        token: null,
        error: {},
      };
    case "ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return { ...state };
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
