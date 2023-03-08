import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchConstructor = createAsyncThunk(
  'constructor/fetchConstructor',
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

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchConstructor.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchConstructor.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;

    },
    [fetchConstructor.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    }

  }
})

export default constructorSlice.reducer;