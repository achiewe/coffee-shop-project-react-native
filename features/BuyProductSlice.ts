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
      if (state.AddProduct.includes(action.payload)) {
        state.AddProduct;
      } else {
        state.AddProduct.push(action.payload);
      }
    },

    setDefaultProduct: (state, action: PayloadAction<number[]>) => {
      state.AddProduct = action.payload;
    },
  },
});

export const {setAddProduct, setDefaultProduct} = BuyProductSlice.actions;
export default BuyProductSlice.reducer;
