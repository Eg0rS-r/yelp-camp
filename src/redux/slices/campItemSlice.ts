import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchCamp = createAsyncThunk(
  "campground/fetchCamp",
  async (param: string) => {
    const { data } = await axios.get<CampItem>(
      `https://629b555acf163ceb8d17dbbd.mockapi.io/camp/${param}`
    );
    return data;
  }
);

type CampItem = {
  name: string;
  description: string;
  imgUrl: string;
  coord: string;
  addBy: string;
  price: number;
  id: string;
};

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

interface CampgroundSliceState {
  status: Status;
  currentItem: CampItem;
}

const emptyCurrentItem = {
	name: "",
	description: "",
	imgUrl: "",
	coord: "",
	addBy: "",
	price: 0,
	id: "",
}

const initialState: CampgroundSliceState = {
  status: Status.LOADING,
  currentItem: emptyCurrentItem,
};

const campgroundSlice = createSlice({
  name: "campItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(fetchCamp.pending, (state) => {
      state.currentItem = emptyCurrentItem;
      state.status = Status.LOADING;
		});
		
		builder.addCase(fetchCamp.fulfilled, (state, action) => {
      state.currentItem = action.payload;
      state.status = Status.SUCCESS;
		});

		builder.addCase(fetchCamp.rejected, (state) => {
      state.currentItem = emptyCurrentItem;
      state.status = Status.ERROR;
		});
  },
});

export const selectCurrentItem = (state: RootState) => state.campItem.currentItem;

export default campgroundSlice.reducer;
