import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
export type Product = { id: string; name: string; category: string; brand: string; price: number; rating: number; stock: number };
type CatalogState = { products: Product[]; query: string; category: string };
const initialState: CatalogState = { products: [{ id: '1', name: 'Trail Shoes', category: 'Shoes', brand: 'Peak', price: 90, rating: 4.5, stock: 4 }, { id: '2', name: 'Daypack', category: 'Bags', brand: 'Path', price: 55, rating: 4.2, stock: 0 }], query: '', category: 'all' };

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) { state.query = action.payload; },
    // TODO: Implement the remaining requirements in README.md
  },
});
export const { setQuery } = catalogSlice.actions;
export default catalogSlice.reducer;
