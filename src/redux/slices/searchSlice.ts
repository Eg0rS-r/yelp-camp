import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';


interface SearchSliceState {
	value: string;
};

const initialState: SearchSliceState = {
  value: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
			state.value = action.payload
    },
  },
});

export const selectSearchText = (state: RootState) => state.search.value

export const { change } = searchSlice.actions;

export default searchSlice.reducer;