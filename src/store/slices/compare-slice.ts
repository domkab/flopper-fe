import cogoToast from 'cogo-toast';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CompareItem, CompareState } from '../../types/RootStateTypes';

const initialState: CompareState = {
  compareItems: []
};

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    addToCompare(state, action: PayloadAction<CompareItem>) {
      const existingItem = state.compareItems.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.compareItems.push(action.payload);
        cogoToast.success("Added To Compare", { position: "bottom-left" });
      }
    },
    deleteFromCompare(state, action: PayloadAction<string>) {
      state.compareItems = state.compareItems.filter(item => item.id !== action.payload);
      cogoToast.error("Removed From Compare", { position: "bottom-left" });
    }
  },
});

export const { addToCompare, deleteFromCompare } = compareSlice.actions;
export default compareSlice.reducer;
