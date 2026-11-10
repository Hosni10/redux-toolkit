import { createSlice } from '@reduxjs/toolkit';
type Notice = { id: string; text: string; read: boolean; createdAt: number };
type NotificationsState = { items: Notice[] };
const initialState: NotificationsState = { items: [] };

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    generate(state) { state.items.unshift({ id: crypto.randomUUID(), text: 'Locally generated event', read: false, createdAt: Date.now() }); },
    markAllRead(state) { state.items.forEach(n => { n.read = true; }); },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { generate, markAllRead } = notificationsSlice.actions;
export default notificationsSlice.reducer;
