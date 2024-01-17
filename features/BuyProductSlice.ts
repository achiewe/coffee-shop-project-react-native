import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ProductProps {
  AddProduct: number[];
}

const initialState: ProductProps = {
  AddProduct: [],
};

const BuyProductSlice = createSlice({
  name: 'AddProduct',
  initialState,
  reducers: {
    setAddProduct: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      if (state.AddProduct.includes(itemId)) {
        state.AddProduct;
      } else {
        state.AddProduct.push(itemId);
      }
    },
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

export const {setAddProduct, setDefaultProduct, setRemoveProduct} =
  BuyProductSlice.actions;
export default BuyProductSlice.reducer;
