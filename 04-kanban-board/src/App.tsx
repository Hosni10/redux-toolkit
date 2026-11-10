import { useAppDispatch, useAppSelector } from './app/store';
import { addTask } from './features/boardSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 04 · Hard</p>
      <h1>Kanban Board & Time Travel</h1>
      <p className="subtitle">createEntityAdapter, task ordering, undo/redo</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Tasks: {useAppSelector(s => s.board.tasks.length)}</p>
        <button onClick={() => dispatch(addTask())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
