import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface TitleCatProps {
  id: number;
}

const initialState: TitleCatProps = {
  id: 1,
};

const TitleCategoryId = createSlice({
  name: 'id',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});
