import { React } from 'react';
import BrawlerCoins from './BrawlerCoins';
import PowerPoints from './PowerPoints';

const Wallet = (context) => <div className="Box">
	<PowerPoints { ...context }/>
	<span className="symbol">+</span>
	<BrawlerCoins { ...context }/>

</div>;

export default Wallet;
