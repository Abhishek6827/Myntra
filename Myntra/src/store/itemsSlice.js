import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      // Validate and ensure all items have required fields
      return action.payload.map((item) => ({
        ...item,
        rating: item.rating || { stars: 0, count: 0 },
        return_period: item.return_period || 0,
        delivery_date: item.delivery_date || "",
      }));
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;
