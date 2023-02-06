/* eslint-disable no-magic-numbers */
import { React } from 'react';
import BackgroundImage from './BackgroundImage';
import BrawlerName from './BrawlerName';
import BrawlerPower from './BrawlerPower';
import Rank from './Rank';
import Trophies from './Trophies';
import Wallet from './Wallet';

const squareMultiplier = 168;
const squareMargin = 100;
const squareStyle = (context) => {
	const { data: { key }, config: { size }} = context;

	return {
		top: 70 * size,
		left: ((key * squareMultiplier) + squareMargin) * size,
		width: 150 * size,
		height: 150 * size,
	};
};

const Square = (context) =>
	<div
		className="square"
		style={ squareStyle(context) }
	>
		<Rank { ...context }/>
		<Trophies { ...context }/>
		<BackgroundImage { ...context }/>
		<BrawlerName { ...context }/>
		<BrawlerPower { ...context }/>
		<Wallet { ...context }/>
	</div>;

export default Square;
