import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/ingredients');

      if (!response.ok) {
        throw new Error('Server Error');
      }

       const data = await response.json();
     
      return data;

    
    } catch (error) {
      return (rejectWithValue(error.message));
    }
  }
);

const initialState = {
  items: null,
  loading: false,
  error: false
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReduers: {
    [fetchIngredients.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    }

  }
})


export const { setItems } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;

