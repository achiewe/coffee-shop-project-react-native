import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// type of state
export interface TitleCatProps {
  id: number;
}

// value of state
const initialState: TitleCatProps = {
  id: 1,
};

// state name and reducer
const TitleCategoryIdSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

// export setState
export const {setId} = TitleCategoryIdSlice.actions;

// export TitleCategoryId reducer
export default TitleCategoryIdSlice.reducer;
