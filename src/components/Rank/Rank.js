import { React } from 'react';

const Rank = (context) => {
	const { data: { brawler }} = context;

	return <div>
		<img
			className="rank"
			src="/image/Rank.png"
			alt="e"
			height="50px"
			width="50px"
		/>
		<span className="rankLabel">{brawler.rank}</span>
	</div>;
};

export default Rank;
