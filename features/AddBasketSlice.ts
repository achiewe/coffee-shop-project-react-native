import {createSlice, PayloadAction} from '@reduxjs/toolkit';

// define the interface for the BasketProps
export interface BasketProps {
  addCard: boolean;
}

// define the initial state for the basket, with addCard set to false
const initialState: BasketProps = {
  addCard: false,
};

// Create a Redux slice using createSlice
const AddBasketSlice = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    setAddCard: (state, action: PayloadAction<boolean>) => {
      state.addCard = action.payload;
    },
  },
});

// extract the action creator from the slice
export const {setAddCard} = AddBasketSlice.actions;

// export the reducer function to be used in the Redux store
export default AddBasketSlice.reducer;
