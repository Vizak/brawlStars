import { React } from 'react';

const Coins = (context) => {
	const { data: { brawler }} = context;

	return	<span className="coins">
		<img
			style={ { borderRadius: '50%' } }
			src="/image/coins.png"
			alt="e"
			height="45px"
			width="45px"
		/>
		<label className="coinLabel">{brawler.coins}</label>
	</span>;
};

export default Coins;
