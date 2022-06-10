import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCampground = createAsyncThunk(
	'campground/fetchCampground',
	async (params) => {
		const { searchText } = params;
		const { data } = await axios.get(
			`https://629b555acf163ceb8d17dbbd.mockapi.io/campgrounds?search=${searchText}`
		);
		return data;
	})

export const fetchCamp = createAsyncThunk(
	'campground/fetchCamp',
	async (params) => {
		const { data } = await axios.get(
			`https://629b555acf163ceb8d17dbbd.mockapi.io/camp/${params}`
		);
		return data;
	})

const initialState = {
	items: [],
	status: 'loading',
	currentItem: {},
};

const campgroundSlice = createSlice({
	name: 'campground',
	initialState,
	reducers: {
		setItems: (state, actions) => {
			state.items = actions.payload;
		},
	},
	extraReducers: {
		[fetchCampground.pending]: (state) => {
			state.items = [];
			state.status = 'loading';
		},
		[fetchCampground.fulfilled]: (state, action) => {
			state.items = action.payload;
			state.status = 'sucess';
		},
		[fetchCampground.rejected]: (state) => {
			state.items = [];
			state.status = 'error';
		},

		[fetchCamp.pending]: (state) => {
			state.currentItem = {};
			state.status = 'loading';
		},
		[fetchCamp.fulfilled]: (state, action) => {
			state.currentItem = action.payload;
			state.status = 'sucess';
		},
		[fetchCamp.rejected]: (state) => {
			state.currentItem = {};
			state.status = 'error';
		},
	}
});

export const { setItems } = campgroundSlice.actions;

export default campgroundSlice.reducer