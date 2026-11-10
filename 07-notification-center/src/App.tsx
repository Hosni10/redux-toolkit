import { useAppDispatch, useAppSelector } from './app/store';
import { generate, markAllRead } from './features/notificationsSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 07 · Hard</p>
      <h1>Simulated Notification Center</h1>
      <p className="subtitle">Listener middleware, notification lifecycle, scheduling simulation</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Unread: {useAppSelector(s => s.notifications.items.filter(n => !n.read).length)}</p>
        <button onClick={() => dispatch(generate())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
