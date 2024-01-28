import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the interface for the ProductProps
export interface ProductProps {
  AddProduct: number[];
}

// Define the initial state for the product, with AddProduct set to an empty array
const initialState: ProductProps = {
  AddProduct: [],
};

// Create a Redux slice using createSlice
const BuyProductSlice = createSlice({
  name: 'AddProduct',
  initialState,
  reducers: {
    // set state
    setAddProduct: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      if (!state.AddProduct.includes(itemId)) {
        state.AddProduct.push(itemId);
      }
    },

    // set state for default value
    setDefaultProduct: (state, action: PayloadAction<number[]>) => {
      state.AddProduct = action.payload;
    },

    setRemoveProduct: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      if (state.AddProduct.includes(itemId)) {
        state.AddProduct = state.AddProduct.filter(id => id !== itemId);
      }
    },
  },
});

// Extract the action creators from the slice
export const {setAddProduct, setDefaultProduct, setRemoveProduct} =
  BuyProductSlice.actions;

// Export the reducer function to be used in the Redux store
export default BuyProductSlice.reducer;
