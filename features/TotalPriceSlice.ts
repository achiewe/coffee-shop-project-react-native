import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TotalPriceProps {
  TotalPrice: string;
}

const initialState: TotalPriceProps = {
  TotalPrice: '',
};

const TotalPriceSlice = createSlice({
  name: 'searchTitle',
  initialState,
  reducers: {
    setTotalPrice: (state, action: PayloadAction<string>) => {
      state.TotalPrice = action.payload;
    },
  },
});

export const {setTotalPrice} = TotalPriceSlice.actions;
export default TotalPriceSlice.reducer;
