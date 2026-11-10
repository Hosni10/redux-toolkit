import { createSlice } from '@reduxjs/toolkit';
type SeatState = { selected: string[]; booked: string[]; maxSeats: number };
const initialState: SeatState = { selected: [], booked: ['A3','B4'], maxSeats: 6 };

export const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    toggleA1(state) { const id = 'A1'; if (state.booked.includes(id)) return; if (state.selected.includes(id)) state.selected = state.selected.filter(s => s !== id); else if (state.selected.length < state.maxSeats) state.selected.push(id); },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { toggleA1 } = seatsSlice.actions;
export default seatsSlice.reducer;
