/* eslint-disable max-lines-per-function */
import { React } from 'react';

const Trophies = (context) => {
	const { data: { brawler }} = context;

	return (
		<div
			className="trophyRectangle"
		>
			<div
				className="bar"
				style={ { display: 'flex',
					width: `${ brawler.trophies }px` } }
			/>
			<img
				className="trophy"
				src="/image/Trophy.png"
				alt="e"
				height="20px"
				width="20px"
			/>
			<span className="trophyLabel">{brawler.trophies}</span>
		</div>);
};

export default Trophies;
