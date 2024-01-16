import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import itemType from '../typesData';

export interface QuantityProps {
  quantities: number[];
}

const initialState: QuantityProps = {
  quantities: [],
};

const QuantityItemSlice = createSlice({
  name: 'quantity',
  initialState,
  reducers: {
    setQuantity: (state, action: PayloadAction<number[]>) => {
      state.quantities = action.payload;
    },

    incrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.quantities[index] += 1;
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.quantities[index] = Math.max(1, state.quantities[index] - 1);
    },
  },
});

export const {setQuantity, incrementQuantity, decrementQuantity} =
  QuantityItemSlice.actions;
export default QuantityItemSlice.reducer;
