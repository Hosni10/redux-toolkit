import { createSlice } from '@reduxjs/toolkit';
export type Product = { id: string; sku: string; name: string; category: string; openingStock: number; threshold: number };
type InventoryState = { products: Product[]; ledger: { id: string; productId: string; delta: number; reason: string }[] };
const initialState: InventoryState = { products: [{ id: 'p1', sku: 'SKU-001', name: 'Keyboard', category: 'Accessories', openingStock: 8, threshold: 3 }], ledger: [] };

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    recordIncoming(state) { state.ledger.push({ id: crypto.randomUUID(), productId: 'p1', delta: 1, reason: 'Demo stock received' }); },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { recordIncoming } = inventorySlice.actions;
export default inventorySlice.reducer;
