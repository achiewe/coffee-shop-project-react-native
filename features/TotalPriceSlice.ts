import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TitleProps {
  searchTitle: string;
}

const initialState: TitleProps = {
  searchTitle: '',
};

const SearchTitleSlice = createSlice({
  name: 'searchTitle',
  initialState,
  reducers: {
    setSearchTitle: (state, action: PayloadAction<string>) => {
      state.searchTitle = action.payload;
    },
  },
});

export const {setSearchTitle} = SearchTitleSlice.actions;
export default SearchTitleSlice.reducer;
