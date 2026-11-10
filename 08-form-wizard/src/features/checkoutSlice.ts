import { createSlice } from '@reduxjs/toolkit';
type CheckoutState = { step: number; draft: { name: string; email: string; delivery: 'shipping' | 'pickup' }; completed: boolean };
const initialState: CheckoutState = { step: 0, draft: { name: '', email: '', delivery: 'shipping' }, completed: false };

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    nextStep(state) { state.step = Math.min(state.step + 1, 3); },
    previousStep(state) { state.step = Math.max(state.step - 1, 0); },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { nextStep, previousStep } = checkoutSlice.actions;
export default checkoutSlice.reducer;
