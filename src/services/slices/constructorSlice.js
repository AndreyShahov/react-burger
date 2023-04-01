import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  board: [],
  isModal: false,
}

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    setBoard(state, action) {
      state.board = [
        ...state.board,
        action.payload
      ]
    },
    removeItem(state, action) {
      state.board = state.board.filter(item => item._id !== action.payload);
    },
    setIsModal(state, action) {
      state.isModal = action.payload;
    }
  }
});

export const { setBoard, removeItem, setIsModal } = constructorSlice.actions;
export default constructorSlice.reducer;
