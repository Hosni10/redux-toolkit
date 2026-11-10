import { createSlice } from '@reduxjs/toolkit';
type Post = { id: string; author: string; text: string; likes: number; likedByMe: boolean };
type FeedState = { posts: Post[] };
const initialState: FeedState = { posts: [{ id: 'p1', author: 'Demo User', text: 'Redux Toolkit challenge!', likes: 2, likedByMe: false }] };

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    toggleFirstLike(state) { const p = state.posts[0]; if (p) { p.likedByMe = !p.likedByMe; p.likes += p.likedByMe ? 1 : -1; } },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { toggleFirstLike } = feedSlice.actions;
export default feedSlice.reducer;
