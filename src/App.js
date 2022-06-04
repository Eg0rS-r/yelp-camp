import React from 'react'
import { Routes, Route } from "react-router-dom";

import './scss/App.scss';

import Index from './pages/Index';
import Campgrounds from './pages/Campgrounds';
import NotFound from './pages/NotFound';

function App() {
	return (
		<div id='App'>
			<Routes>
				<Route path="/" element={<Index />}></Route>
				<Route path="/campgrounds" element={<Campgrounds />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
