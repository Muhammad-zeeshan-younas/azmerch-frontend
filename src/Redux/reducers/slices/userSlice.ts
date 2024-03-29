import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { UserState } from "../../../types/userType";

const initialState: UserState = {
  id: "",
  username: "",
  email: "",
  avatar: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        id: string;
        username: string;
        email: string;
        avatar: string;
        isLoggedIn: boolean;
      }>
    ) => {
      const { id, username, email, avatar, isLoggedIn } = action.payload;
      return {
        ...state,
        id,
        username,
        email,
        avatar,
        isLoggedIn,
      };
    },
  },
});

export const { setUser } = userSlice.actions;
export const user = (state: RootState) => state.user;
export default userSlice.reducer;
