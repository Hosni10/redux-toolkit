import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type CartItem = { key: string; name: string; unitPrice: number; quantity: number; stock: number };
type CartState = { items: CartItem[]; coupon: string | null; shippingMethod: 'standard' | 'express' };
const initialState: CartState = { items: [{ key: 'shirt-blue-m', name: 'Blue Shirt / M', unitPrice: 25, quantity: 1, stock: 8 }], coupon: null, shippingMethod: 'standard' };

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addSample(state) { const item = state.items[0]; if (item && item.quantity < item.stock) item.quantity += 1; },
    clearCart(state) { state.items = []; },
    addItem(state, action: PayloadAction<CartItem>) { state.items.push(action.payload); },

    // TODO: Implement the remaining requirements in README.md
  },
});
export const { addSample, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
