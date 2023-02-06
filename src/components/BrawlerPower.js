import { React } from 'react';

const BrawlerPower = ({ data: { brawler }}) => <div>
	<label className="brawlerPower">power </label>
	<label className="powerValue">{brawler.powerLevel}</label>
</div>;

export default BrawlerPower;
