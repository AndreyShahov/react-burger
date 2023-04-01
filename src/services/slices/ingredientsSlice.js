import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIngredients = createAsyncThunk(
  'ingredients/fetchIngredients',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://norma.nomoreparties.space/api/ingredients');

      if (!response.ok) {
        throw new Error('Server Error');
      }

      const items = await response.json();

      return items.data;


    } catch (error) {
      return (rejectWithValue(error.message));
    }
  }
);

const initialState = {
  items: null,
  loading: false,
  error: false,
  count: null,
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    increaseCounter(state, action) {
      const currentIngredientId = action.payload._id;
      const currentIngredientType = action.payload.type;

      state.items = state.items.map((item) => {
        let count;
        if (item.type === "bun" && currentIngredientType === "bun") {
          item.count = null;
        }
        if (item._id === currentIngredientId) {
          if (item.type === "bun") {
            count = 2;
          } else {
            count = item.count ? ++item.count : 1;
          }
        }

        return item._id === currentIngredientId
          ? {
            ...item,
            count: count,
          }
          : item;
      });


    },
    decreaseCounter(state, action) {
      return {
        ...state,
        items: state.items.map(item => {
          const { count, _id } = item;
          if (_id !== action.payload) {
            return item;
          }
          return {
            ...item,
            count: count > 1 ? count - 1 : null,
          };
        }),
      };
    },
  },
  extraReducers: {
    [fetchIngredients.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.items = null;
    },
    [fetchIngredients.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [fetchIngredients.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.items = null;
    }
  }
})

export const { increaseCounter, decreaseCounter } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;

