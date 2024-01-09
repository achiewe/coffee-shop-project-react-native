import {configureStore} from '@reduxjs/toolkit';
import TitleCategoryId, {TitleCatProps} from './TitleCategoryId';

// add the state in the store
const store = configureStore({
  reducer: {
    id: TitleCategoryId,
  },
});

// add the state in the RootState
export type RootState = {
  id: TitleCatProps;
};

export default store;
