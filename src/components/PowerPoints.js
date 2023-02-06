import { React } from 'react';

const PowerPoints = (context) => {
	const { data: { brawler }} = context;

	return	<span className="powerPoints">
		<img
			src="/image/Coins.png"
			alt="e"
			height="40px"
			width="40px"
		/>
		<label className="powerLabel">{brawler.powerPoints}</label>
	</span>;
};

export default PowerPoints;
