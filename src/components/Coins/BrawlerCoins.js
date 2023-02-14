import { React } from 'react';

const BrawlerCoins = (context) => {
	const { data: { brawler }} = context;

	return	<span className="coins">
		<img
			style={ { borderRadius: '70%' } }
			src="/image/brawlCoins.png"
			alt="e"
			height="40px"
			width="45px"
		/>
		<label className="coinLabel">{brawler.coins}</label>
	</span>;
};

export default BrawlerCoins;
