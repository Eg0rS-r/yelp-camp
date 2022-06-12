import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const fetchCampground = createAsyncThunk(
  "campground/fetchCampground",
  async (param: string) => {
    const { data } = await axios.get<CampgroundItem[]>(
      `https://629b555acf163ceb8d17dbbd.mockapi.io/campgrounds?search=${param}`
    );
    return data;
  }
);

type CampgroundItem = {
  name: string;
  previewText: string;
  imgAddresComp: string;
  id: string;
};

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

interface CampgroundSliceState {
  status: Status;
  items: CampgroundItem[];
}

const initialState: CampgroundSliceState = {
  items: [],
  status: Status.LOADING,
};

const campgroundSlice = createSlice({
  name: "campground",
  initialState,
  reducers: {
    setItems: (state, actions) => {
      state.items = actions.payload;
    },
  },
  extraReducers: (builder) => {
		builder.addCase(fetchCampground.pending, (state) => {
      state.items = [];
      state.status = Status.LOADING;
		});
		
		builder.addCase(fetchCampground.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
		});

		builder.addCase(fetchCampground.rejected, (state) => {
      state.items = [];
      state.status = Status.ERROR;
		});
  },
});

export const selectItems = (state: RootState) => state.campground.items;
export const selectCampgroundsStatus = (state: RootState) => state.campground.status;

export const { setItems } = campgroundSlice.actions;

export default campgroundSlice.reducer;
