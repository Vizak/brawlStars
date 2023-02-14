import { React } from 'react';
import BackgroundImage from './Brawler/BackgroundImage';
import BrawlerName from './Brawler/BrawlerName';
import BrawlerPower from './Brawler/BrawlerPower';
import Rank from './Rank/Rank';
import Trophies from './Trophies/Trophies';
import Wallet from './Coins/Wallet';

const Character = (context) =>
	<div
		className="square"
	>
		<Rank { ...context }/>
		<Trophies { ...context }/>
		<BackgroundImage { ...context }/>
		<BrawlerName { ...context }/>
		<BrawlerPower { ...context }/>
		<Wallet { ...context }/>
	</div>;

export default Character;
