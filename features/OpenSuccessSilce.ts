import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SuccessProps {
  success: boolean;
}

const initialState: SuccessProps = {
  success: false,
};

const OpenSuccessSilce = createSlice({
  name: 'success',
  initialState,
  reducers: {
    setSuccess: (state, action: PayloadAction<boolean>) => {
      state.success = action.payload;
    },
  },
});

export const {setSuccess} = OpenSuccessSilce.actions;
export default OpenSuccessSilce.reducer;
