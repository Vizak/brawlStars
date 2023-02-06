import { React } from 'react';

const Trophies = (context) => {
	const { data: { brawler }} = context;

	return <div>
		<img
			className="trophy"
			src="/image/Trophy.png"
			alt="e"
			height="50px"
			width="50px"
		/>
		<label className="trophyLabel">{brawler.trophies}</label>
	</div>;
};

export default Trophies;
