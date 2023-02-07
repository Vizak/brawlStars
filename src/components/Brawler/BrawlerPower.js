import { React } from 'react';

const BrawlerPower = ({ data: { brawler }}) => <div>
	<span className="brawlerPower">power </span>
	<span className="powerValue">{brawler.powerLevel}</span>
</div>;

export default BrawlerPower;
