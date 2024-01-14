import {createSlice} from '@reduxjs/toolkit';

export interface CountProps {
  quantity: number;
}

const initialState: CountProps = {
  quantity: 0,
};

const QuantityItemSlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    setaddQuantity: state => {
      state.quantity = state.quantity + 1;
    },

    settSubtractQuantity: state => {
      state.quantity = state.quantity - 1;
    },
  },
});

export const {setaddQuantity, settSubtractQuantity} = QuantityItemSlice.actions;
export default QuantityItemSlice.reducer;
