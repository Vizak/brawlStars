import { React } from 'react';

const BrawlerPower = ({ data: { brawler }, state: { upgrade }}) => <div>
	<span className="upgrade">
		<img
			className={ upgrade ? 'moveUp' : 'moveDown' }
			src="/image/Power.png"
			alt="e"
			height="19px"
			width="30px"
		/>
	</span>
	<span className="brawlerPower">power </span>
	<span className="powerValue">{brawler.powerLevel}</span>
</div>;

export default BrawlerPower;
