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
const TitleCategoryId = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});

// export setState
export const {setId} = TitleCategoryId.actions;

// export TitleCategoryId reducer
export default TitleCategoryId.reducer;
