import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  planetes: Planet[];
  // Should reconsider doing this.
  // If multiple element use this loading property we can have UI Issue.
  loading: boolean;
}

const initialState: CounterState = {
  planetes: [],
  loading: false,
};

// Planete Slice
export const planeteSlice = createSlice({
  name: 'planete',
  initialState,
  reducers: {
    // Update the planete field in the store
    updatePlanete: (state, action: PayloadAction<Planet[]>) => {
      state.planetes = action.payload;
    },
    // Update the loading field in the store
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Export all actions for the reducer
export const { updatePlanete, updateLoading } = planeteSlice.actions;

export default planeteSlice.reducer;
