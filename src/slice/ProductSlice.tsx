import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the Product type
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  stockQuantity: number;
}

interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
      addProduct: (state, action: PayloadAction<Product>) => {
          const isPresent = state.items.find((item) => item.id === action.payload.id)
          if (!isPresent) {
            state.items.push(action.payload);
          } else {
            alert("Already Added in the cart")
          }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Export the actions to use them in components
export const { addProduct, removeProduct } = ProductSlice.actions;

// Export the reducer as default to use in the Redux store
export default ProductSlice.reducer;
