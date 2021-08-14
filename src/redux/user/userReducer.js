import { createReducer } from "@reduxjs/toolkit";
import {
  loginUserSuccess,
  registerUserSuccess,
  signOutUser,
} from "../auth/authAction";

export const userReducer = createReducer(
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
