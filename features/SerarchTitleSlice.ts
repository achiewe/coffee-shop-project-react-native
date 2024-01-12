import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface titleProps {
  searchTitle: string;
}

const initialState: titleProps = {
  searchTitle: '',
};

const SearchTitleSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
  },
});

export const {setSearchTitle} = SearchTitleSlice.actions;
export default SearchTitleSlice.reducer;
