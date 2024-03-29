import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// Define the interface for the state of the slice
export interface TotalPriceProps {
  TotalPrice: string;
}

// Define the initial state for the slice
const initialState: TotalPriceProps = {
  TotalPrice: '',
};

// Create a Redux Toolkit slice with the name 'searchTitle'
const TotalPriceSlice = createSlice({
  name: 'searchTitle',
  initialState,
  reducers: {
    // Reducer function to set the total price
    setTotalPrice: (state, action: PayloadAction<string>) => {
      state.TotalPrice = action.payload;
    },
  },
});

// Extract the action creator from the slice
export const {setTotalPrice} = TotalPriceSlice.actions;

// Export the reducer function generated by the slice
export default TotalPriceSlice.reducer;
