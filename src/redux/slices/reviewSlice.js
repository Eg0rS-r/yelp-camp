import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
	'campground/fetchReviews',
	async (param) => {
		const { data } = await axios.get(
			`https://629b555acf163ceb8d17dbbd.mockapi.io/comments?campId=${param}`
		);
		return data;
	})

const initialState = {
	reviews: [],
	status: 'loading',
};

const reviewSlice = createSlice({
	name: 'review',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchReviews.pending]: (state) => {
			state.reviews = [];
			state.status = 'loading';
		},
		[fetchReviews.fulfilled]: (state, action) => {
			state.reviews = action.payload;
			state.status = 'sucess';
		},
		[fetchReviews.rejected]: (state) => {
			state.reviews = [];
			state.status = 'error';
		},
	}
});

export default reviewSlice.reducer