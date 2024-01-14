import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface BasketProps {
  count: number;
}

const initialState: BasketProps = {
  count: 0,
};

const QuantityItemSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    setaddCount: state => {
      state.count = state.count + 1;
    },

    settSubtractCount: state => {
      state.count = state.count - 1;
    },
  },
});

export const {setaddCount, settSubtractCount} = QuantityItemSlice.actions;
export default QuantityItemSlice.reducer;
