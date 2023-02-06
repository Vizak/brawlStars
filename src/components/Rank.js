import { React } from 'react';

const Rank = (context) => {
	const { data: { brawler }} = context;

	return <div>
		<img
			className="rank"
			src="/image/Rank.png"
			alt="e"
			height="70px"
			width="100px"
		/>
		<label className="rankLabel">{brawler.rank}</label>
	</div>;
};

export default Rank;
