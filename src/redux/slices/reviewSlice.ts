import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

enum Status {
	LOADING = 'loading',
	SUCCESS = 'success',
	ERROR = 'error',
}

export const fetchReviews = createAsyncThunk(
  "campground/fetchReviews",
  async (param: string) => {
    const { data } = await axios.get<ReviewItem[]>(
      `https://629b555acf163ceb8d17dbbd.mockapi.io/comments?campId=${param}`
    );
    return data;
  }
);

type ReviewItem = {
	campId: string;
	id: string;
	createdAt: string; 
	name: string;
	text: string;
}

interface ReviewSliceState {
	status: Status;
	reviews: ReviewItem[];
}

const initialState: ReviewSliceState = {
  reviews: [],
  status: Status.LOADING,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
		builder.addCase(fetchReviews.pending, (state) => {
			state.reviews = [];
      state.status = Status.LOADING;
		});
		
		builder.addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviews = action.payload;
      state.status = Status.SUCCESS;
		});

		builder.addCase(fetchReviews.rejected, (state) => {
			state.reviews = [];
      state.status = Status.ERROR;
		})
  },
});

export const selectReviews = (state: RootState) => state.review.reviews
export const selectStatus = (state: RootState) => state.review.status

export default reviewSlice.reducer;
