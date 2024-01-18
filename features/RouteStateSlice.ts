import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface RouteProps {
  stateRoute: string;
}

const initialState: RouteProps = {
  stateRoute: '',
};

const RouteStateSlice = createSlice({
  name: 'stateRoute',
  initialState,
  reducers: {
    setStateRoute: (state, action: PayloadAction<string>) => {
      state.stateRoute = action.payload;
    },
  },
});

export const {setStateRoute} = RouteStateSlice.actions;
export default RouteStateSlice.reducer;
