import { createSlice } from "@reduxjs/toolkit";

const themeReducer = createSlice({
  name: "theme",
  initialState: { theme: false },
  reducers: {
    themeChange: (state, actions) => {
      console.log("slice", state, actions.payload);
      return { ...state, theme: actions.payload };
    },
  },
});
export const { themeChange } = themeReducer.actions;
export default themeReducer.reducer;
