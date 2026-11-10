import { useAppDispatch, useAppSelector } from './app/store';
import { updateFirstNote } from './features/notesSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 10 · Hard+</p>
      <h1>Offline Notes & Version History</h1>
      <p className="subtitle">Local change queue, version control, IndexedDB extension</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>First note revision: {useAppSelector(s => s.notes.items[0]?.revision ?? 0)}</p>
        <button onClick={() => dispatch(updateFirstNote())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
