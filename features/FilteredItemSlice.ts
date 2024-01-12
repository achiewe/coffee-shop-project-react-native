import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import itemType from '../typesData';

export interface ItemProps {
  filteredItems: itemType[];
}

const initialState: ItemProps = {
  filteredItems: [],
};

const FilteredItemSlice = createSlice({
  name: 'filteredItems',
  initialState,
  reducers: {
    setFilteredItems: (state, action: PayloadAction<itemType[]>) => {
      state.filteredItems = action.payload;
    },
  },
});

export const {setFilteredItems} = FilteredItemSlice.actions;
export default FilteredItemSlice.reducer;
