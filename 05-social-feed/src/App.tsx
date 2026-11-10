import { useAppDispatch, useAppSelector } from './app/store';
import { toggleFirstLike } from './features/feedSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 05 · Hard</p>
      <h1>Social Feed & Undoable Interactions</h1>
      <p className="subtitle">Entity normalization, reaction rules, local operation journal</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Likes on first post: {useAppSelector(s => s.feed.posts[0]?.likes ?? 0)}</p>
        <button onClick={() => dispatch(toggleFirstLike())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
