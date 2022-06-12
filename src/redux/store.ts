import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import search from './slices/searchSlice';
import campground from './slices/campgroundSlice';
import review from './slices/reviewSlice';
import campItem from './slices/campItemSlice';

export const store = configureStore({
  reducer: {
		search,
		campground,
		campItem,
		review,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();