import { useAppDispatch, useAppSelector } from './app/store';
import { toggleA1 } from './features/seatsSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 09 · Hard</p>
      <h1>Interactive Seat Reservation Simulator</h1>
      <p className="subtitle">Reservation invariants, allocation rules, expirations</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Selected seats: {useAppSelector(s => s.seats.selected.join(", ") || "none")}</p>
        <button onClick={() => dispatch(toggleA1())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
