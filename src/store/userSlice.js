import { createSlice } from "@reduxjs/toolkit";
import { usersList } from "../db/usersList";

const initialState = {
  users: usersList,
  loggedUser: null,
  response: {
    success: null,
    message: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (state, action) => {
      const foundUserByEmail = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (foundUserByEmail) {
        state.response = {
          success: false,
          message: "User already exists",
        };
      } else {
        const newUser = {
          id: Math.random().toString(),
          ...action.payload,
        };
        state.users = [...state.users, newUser];
        state.loggedUser = newUser;
        state.response = {
          success: true,
          message: null,
        };
      }
    },
    login: (state, action) => {
      const foundUserByEmail = state.users.find(
        (user) => user.email === action.payload.email
      );
      if (!foundUserByEmail) {
        state.response = {
          success: false,
          message: "User does not exist",
        };
      } else {
        if (foundUserByEmail.password !== action.payload.password) {
          state.response = {
            success: false,
            message: "Invalid password",
          };
        } else {
          state.loggedUser = foundUserByEmail;
          state.response = {
            success: true,
            message: null,
          };
        }
      }
    },
    logout(state) {
      state.loggedUser = null;
    },
  },
});

export const { login, logout, register } = userSlice.actions;

export default userSlice.reducer;
