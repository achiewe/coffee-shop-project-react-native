import {configureStore} from '@reduxjs/toolkit';
import TitleCategoryId, {TitleCatProps} from './TitleCategoryId';

const store = configureStore({
  reducer: {
    id: TitleCategoryId,
  },
});

export type RootState = {
  id: TitleCatProps;
};

export default store;
