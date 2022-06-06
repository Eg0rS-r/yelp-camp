import React from 'react'
import { Routes, Route } from "react-router-dom";

import './scss/App.scss';

import Index from './pages/Index';
import Layout from './pages/Layout';
import Campgrounds from './pages/Campgrounds';
import NotFound from './pages/NotFound';

function App() {


	return (
		<div id='App'>
			<Routes>
				<Route path="/index" element={<Index />} />
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Campgrounds />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
