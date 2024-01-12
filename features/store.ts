import {configureStore} from '@reduxjs/toolkit';
import TitleCategoryIdSlice, {TitleCatProps} from './TitleCategoryIdSlice';
import AddBasketSlice, {BasketProps} from './AddBasketSlice';
import GetInputValueSlice, {InputProps} from './GetInputValueSlice';
import SerarchTitleSlice, {TitleProps} from './SerarchTitleSlice';
import FilteredItemSlice, {ItemProps} from './FilteredItemSlice';

// add the state in the store
const store = configureStore({
  reducer: {
    id: TitleCategoryIdSlice,
    addCard: AddBasketSlice,
    inputValue: GetInputValueSlice,
    searchTitle: SerarchTitleSlice,
    filteredItems: FilteredItemSlice,
  },
});

// add the state in the RootState
export type RootState = {
  id: TitleCatProps;
  addCard: BasketProps;
  inputValue: InputProps;
  searchTitle: TitleProps;
  filteredItems: ItemProps;
};

export default store;
