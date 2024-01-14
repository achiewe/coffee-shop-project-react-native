import {createSlice} from '@reduxjs/toolkit';

export interface QuantityProps {
  quantity: number;
}

const initialState: QuantityProps = {
  quantity: 1,
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
