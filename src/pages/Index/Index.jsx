import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import style from './Index.module.scss'

import indexImage from '../../assets/images/index page/Hero Image Mobile.jpg';

const Index = () => {
	return (
		<>
			<Header />

			<main>
				<img src={indexImage} alt="campground on top of the mountain" />
				<div className={style.content}>
					<h1 className={style.title}>Explore the best camps on Earth.</h1>
					<p className={style.text}>YelpCamp is a curated list of the best camping spots on Earth. Unfiltered and unbiased reviews.</p>
					<ul className={style.list}>
						<li>Add your own camp suggestions.</li>
						<li>Leave reviews and experiences.</li>
						<li>See locations for all camps.</li>
					</ul>
					<Link className='btn' to='/campgrounds'>View Campgrounds</Link>

				</div>
			</main>

		</>
	)
}

export default Index;