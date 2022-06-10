import { configureStore } from '@reduxjs/toolkit'

import search from './slices/searchSlice';
import campground from './slices/campgroundSlice';
import review from './slices/reviewSlice';

export const store = configureStore({
  reducer: {
		search,
		campground,
		review,
	},
})