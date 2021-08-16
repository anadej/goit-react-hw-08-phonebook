import { createReducer } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import {
  loginUserSuccess,
  registerUserSuccess,
  signOutUser,
} from "../auth/authAction";

const userReducerPersistConfig = {
  key: "userInfo",
  storage: storage,
  whitelist: ["email", "localId"],
};

const userReducer = createReducer(
  { email: "", localId: "" },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
    }),
    [loginUserSuccess]: (_, { payload }) => ({
      email: payload.email,
      localId: payload.localId,
    }),
    [signOutUser]: () => ({
      email: "",
      localId: "",
    }),
  }
);

export default persistReducer(userReducerPersistConfig, userReducer);
