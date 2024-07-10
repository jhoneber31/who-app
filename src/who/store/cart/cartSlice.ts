import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  quantity: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.quantity += action.payload;
    }
  }
});

export const { increment } = cartSlice.actions;
export default cartSlice.reducer;