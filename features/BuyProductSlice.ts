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
    setAddProduct: (state, action: PayloadAction<number | number[]>) => {
      const payloadArray = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      payloadArray.forEach(payload => {
        if (!state.AddProduct.includes(payload)) {
          state.AddProduct.push(payload);
        }
      });
    },

    setDefaultProduct: (state, action: PayloadAction<number[]>) => {
      state.AddProduct = action.payload;
    },
  },
});

export const {setAddProduct, setDefaultProduct} = BuyProductSlice.actions;
export default BuyProductSlice.reducer;
