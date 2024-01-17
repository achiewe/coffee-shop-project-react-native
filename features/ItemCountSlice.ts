import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface CountProps {
  ItemCount: number;
}

const initialState: CountProps = {
  ItemCount: 0,
};

const ItemCountSlice = createSlice({
  name: 'ItemCount',
  initialState,
  reducers: {
    setItemCount: state => {
      state.ItemCount = state.ItemCount + 1;
    },

    resetItemCount: state => {
      state.ItemCount = 0;
    },
  },
});

export const {setItemCount, resetItemCount} = ItemCountSlice.actions;
export default ItemCountSlice.reducer;
