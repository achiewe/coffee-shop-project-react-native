import {createSlice} from '@reduxjs/toolkit';

export interface CountProps {
  count: number;
}

const initialState: CountProps = {
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
