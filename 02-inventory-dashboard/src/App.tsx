import { useAppDispatch, useAppSelector } from './app/store';
import { recordIncoming } from './features/inventorySlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 02 · Medium–Hard</p>
      <h1>Inventory & Stock Ledger</h1>
      <p className="subtitle">Entity adapter, stock ledger, validation, grouped selectors</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Stock events: {useAppSelector(s => s.inventory.ledger.length)}</p>
        <button onClick={() => dispatch(recordIncoming())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
