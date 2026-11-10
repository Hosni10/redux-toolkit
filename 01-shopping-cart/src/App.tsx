import { useAppDispatch, useAppSelector } from './app/store';
import { addSample, clearCart } from './features/cartSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 01 · Medium</p>
      <h1>Advanced Shopping Cart</h1>
      <p className="subtitle">Cart state, variant keys, memoized selectors, undo</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Cart items: {useAppSelector(s => s.cart.items.reduce((n, item) => n + item.quantity, 0))}</p>
        <button onClick={() => dispatch(addSample())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
