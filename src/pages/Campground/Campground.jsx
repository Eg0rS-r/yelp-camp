import React from 'react'

import CampInfo from '../../components/CampInfo'
import Map from '../../components/Map'
import ReviewList from '../../components/ReviewList'

import style from './Campground.module.scss'

const Campground = () => {
	return (
		<div className={style.campground}>
			<div className={style.camp_info}><CampInfo /></div>
			<div className={style.map}><Map /></div>
			<div className={style.review}><ReviewList /></div>
		</div>
	)
}

export default Campground;