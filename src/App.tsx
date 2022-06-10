import React from 'react'
import { Routes, Route } from "react-router-dom";

import './scss/App.scss';

import Index from './pages/Index/Index';
import Layout from './pages/Layout';
import CampgroundsList from './pages/CampgroundsList';
import Campground from './pages/Campground/Campground';
import NotFound from './pages/NotFound';
import Login from './pages/Login/Login';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<div id='App'>
			<ScrollToTop>
				<Routes>
					<Route path="/index" element={<Index />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Layout />}>
						<Route path="" element={<CampgroundsList />} />
						<Route path="campground/:id" element={<Campground />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</ScrollToTop>
		</div>
	);
}

export default App;
