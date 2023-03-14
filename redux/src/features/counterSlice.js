import { createSlice } from "@reduxjs/toolkit";

// slice = action + reducer
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 5,
    product: [],
  },
  reducers: {
    // increment by value : value exist in the payload variable => ( mawjouda fil app.jsx)
    incremenet: (state, payload) => {
      console.log(payload.payload.number);
      state.value += payload.payload.number;
    },
    // decrement by 1
    decrement: (state) => {
      state.value -= 1;
    },
    // re-initilize lil value => value =0
    reset: (state) => {
      state.value = 0;
    },
  },
});

// prepare action
export const { incremenet, decrement, reset } = counterSlice.actions;

// prepare reducer
export default counterSlice.reducer;
