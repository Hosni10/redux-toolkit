import { createSlice } from '@reduxjs/toolkit';
type Note = { id: string; title: string; text: string; revision: number };
type NotesState = { items: Note[] };
const initialState: NotesState = { items: [{ id: 'n1', title: 'Welcome', text: 'Build a local-first note manager.', revision: 1 }] };

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    updateFirstNote(state) { const note = state.items[0]; if (note) { note.text += ' ✎'; note.revision += 1; } },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { updateFirstNote } = notesSlice.actions;
export default notesSlice.reducer;
