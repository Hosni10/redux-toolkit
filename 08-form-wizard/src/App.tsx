import { useAppDispatch, useAppSelector } from './app/store';
import { nextStep, previousStep } from './features/checkoutSlice';
import './style.css';

export default function App() {
  const dispatch = useAppDispatch();
  return (
    <main className="container">
      <p className="eyebrow">Redux Toolkit · Challenge 08 · Medium–Hard</p>
      <h1>Multi-Step Checkout Wizard</h1>
      <p className="subtitle">Draft persistence, validation, cross-step state</p>
      <section className="panel">
        <h2>Starter state</h2>
        <p>Current step: {useAppSelector(s => s.checkout.step + 1)} / 4</p>
        <button onClick={() => dispatch(nextStep())}>Try a sample action</button>
      </section>
      <section className="panel">
        <h2>Your assignment</h2>
        <p>Open <code>README.md</code> and implement the listed requirements. This is an intentionally incomplete starter, not a finished solution.</p>
        <p>All app data is local. No external API is required.</p>
      </section>
    </main>
  );
}
