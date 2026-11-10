import { createSlice } from '@reduxjs/toolkit';
type Task = { id: string; title: string; column: 'todo' | 'doing' | 'done' };
type BoardState = { tasks: Task[]; nextId: number };
const initialState: BoardState = { tasks: [{ id: '1', title: 'Set up normalized entities', column: 'todo' }], nextId: 2 };

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addTask(state) { state.tasks.push({ id: String(state.nextId++), title: 'New task', column: 'todo' }); },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { addTask } = boardSlice.actions;
export default boardSlice.reducer;
