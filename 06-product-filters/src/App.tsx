import { useAppDispatch, useAppSelector } from './app/store';
import { setQuery } from './features/catalogSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 06 · Medium–Hard</p>
      <h1>Advanced Product Filtering Lab</h1>
      <p className="subtitle">Memoized selectors, composed filters, URL state</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Matching products: {useAppSelector(s => s.catalog.products.filter(p => p.name.toLowerCase().includes(s.catalog.query.toLowerCase())).length)}</p>
        <button onClick={() => dispatch(setQuery("shoes"))}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
