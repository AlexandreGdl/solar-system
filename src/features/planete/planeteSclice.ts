import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  planetes: Planet[];
  // Should reconsider doing this.
  // If multiple element use this pending property we can have UI Issue.
  pending: boolean;
}

const initialState: CounterState = {
  planetes: [],
  pending: false,
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
    // Update the pending field in the store
    updatePending: (state, action: PayloadAction<boolean>) => {
      state.pending = action.payload;
    },
  },
});

// Export all actions for the reducer
export const { updatePlanete, updatePending } = planeteSlice.actions;

export default planeteSlice.reducer;
