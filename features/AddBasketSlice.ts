import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface BasketProps {
  addCard: boolean;
}

const initialState: BasketProps = {
  addCard: false,
};

const AddBasketSlice = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    setAddCard: state => {
      state.addCard = !state.addCard;
    },
  },
});

export const {setAddCard} = AddBasketSlice.actions;
export default AddBasketSlice.reducer;
