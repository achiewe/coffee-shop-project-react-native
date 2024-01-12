import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface inputProps {
  inputValue: string;
}

const initialState: inputProps = {
  inputValue: '',
};

const GetInputValueSlice = createSlice({
  name: 'inputValue',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
});

export const {setInputValue} = GetInputValueSlice.actions;
export default GetInputValueSlice.reducer;
