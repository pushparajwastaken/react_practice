import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};
const conterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addValue: (state) => {
      state.value++;
    },
    removeValue: (state) => {
      state.value--;
    },
  },
});
export const { addValue, removeValue } = conterSlice.actions;
export default conterSlice.reducer;
