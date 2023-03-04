import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: null
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  }
})

export const { setItems } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;

