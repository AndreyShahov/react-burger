import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIngredients = createAsyncThunk('ingredients/fetchIngredientsGet', async () => {

});

const initialState = {
  items: null,
  status: ''
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    }
  }, extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.status = 'loading';
      state.items = null;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchIngredients.rejected]: (state) => {
      state.status = 'error';
      state.items = null;
    }
  }
})

export const { setItems } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;


