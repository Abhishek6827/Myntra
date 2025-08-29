import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      // ✅ सीधे items return करें, items[0] नहीं
      return action.payload;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
