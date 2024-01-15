import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import itemType from '../typesData';

export interface QuantityProps {
  quantities: number[];
}

// Function to initialize quantities array based on coffeeItems length
const initializeQuantities = (coffeeItems: itemType[]): number[] => {
  return Array(coffeeItems.length).fill(1);
};

const initialState: QuantityProps = {
  quantities: [], // Initial state will be set dynamically based on coffeeItems
};

const QuantityItemSlice = createSlice({
  name: 'quantity',
  initialState: {
    ...initialState,
    quantities: initializeQuantities([]), // Initialize with an empty array for now
  },
  reducers: {
    setQuantity: (
      state,
      action: PayloadAction<{index: number; quantity: number}>,
    ) => {
      const {index, quantity} = action.payload;
      state.quantities[index] = quantity;
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
