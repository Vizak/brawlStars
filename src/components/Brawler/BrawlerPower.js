import { React } from 'react';

const BrawlerPower = ({ data: { brawler }}) => <div>
	<img
		className="upgrade"
		src="/image/Power.png"
		alt="e"
		height="19px"
		width="30px"
	/>
	<span className="brawlerPower">power </span>
	<span className="powerValue">{brawler.powerLevel}</span>
</div>;

export default BrawlerPower;
