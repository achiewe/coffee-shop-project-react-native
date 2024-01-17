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
    setItemCount: (state, action: PayloadAction<boolean>) => {
      state.ItemCount = state.ItemCount + 1;
    },
  },
});

export const {setItemCount} = ItemCountSlice.actions;
export default ItemCountSlice.reducer;
