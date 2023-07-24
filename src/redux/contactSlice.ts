import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface contactState {
  data: any;
  selectedLink: any;
}

const initialState: contactState = {
  data: [],
  selectedLink: null,
};

export const contactSlice = createSlice({
  name: "contactData",
  initialState,
  reducers: {
    setContactData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setSelectedLink: (state, action: PayloadAction<any>) => {
      state.selectedLink = action.payload;
    },
  },
});

export const { setContactData, setSelectedLink } = contactSlice.actions;

export default contactSlice.reducer;
