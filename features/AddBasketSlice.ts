import {createSlice} from '@reduxjs/toolkit';

export interface BasketProps {
  addCard: boolean;
}

const initialState: BasketProps = {
  addCard: false,
};

const AddBasket = createSlice({
  name: 'addCard',
  initialState,
  reducers: {
    setAddCard: state => {
      state.addCard = !state.addCard;
    },
  },
});

export const {setAddCard} = AddBasket.actions;
export default AddBasket.reducer;
