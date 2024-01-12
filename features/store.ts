import {configureStore} from '@reduxjs/toolkit';
import TitleCategoryId, {TitleCatProps} from './TitleCategoryId';
import AddBasket, {BasketProps} from './AddBasket';

// add the state in the store
const store = configureStore({
  reducer: {
    id: TitleCategoryId,
    addCard: AddBasket,
  },
});

// add the state in the RootState
export type RootState = {
  id: TitleCatProps;
  addCard: BasketProps;
};

export default store;
