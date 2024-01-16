import {configureStore} from '@reduxjs/toolkit';
import TitleCategoryIdSlice, {TitleCatProps} from './TitleCategoryIdSlice';
import AddBasketSlice, {BasketProps} from './AddBasketSlice';
import SerarchTitleSlice, {TitleProps} from './SearchTitleSlice';
import FilteredItemSlice, {ItemProps} from './FilteredItemSlice';
import QuantityItemSlice, {QuantityProps} from './QuantityItemSlice';
import BuyProductSlice, {ProductProps} from './BuyProductSlice';
import OpenSuccessSilce, {SuccessProps} from './OpenSuccessSilce';

// add the state in the store
const store = configureStore({
  reducer: {
    id: TitleCategoryIdSlice,
    addCard: AddBasketSlice,
    searchTitle: SerarchTitleSlice,
    filteredItems: FilteredItemSlice,
    AddProduct: BuyProductSlice,
    quantity: QuantityItemSlice,
    success: OpenSuccessSilce,
  },
});

// add the state in the RootState
export type RootState = {
  id: TitleCatProps;
  addCard: BasketProps;
  searchTitle: TitleProps;
  filteredItems: ItemProps;
  quantity: QuantityProps;
  AddProduct: ProductProps;
  success: SuccessProps;
};

export default store;
