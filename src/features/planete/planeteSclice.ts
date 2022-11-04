import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  planetes: Planet[];
  loading: boolean;
}

const initialState: CounterState = {
  planetes: [],
  loading: false,
};

export const planeteSlice = createSlice({
  name: 'planete',
  initialState,
  reducers: {
    updatePlanete: (state, action: PayloadAction<Planet[]>) => {
      state.planetes = action.payload;
    },
    updateLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePlanete, updateLoading } = planeteSlice.actions;

export default planeteSlice.reducer;
