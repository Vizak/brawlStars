import { React } from 'react';
import Coins from './Coins';
import PowerPoints from './PowerPoints';

const Wallet = (context) => <div className="Box">
	<PowerPoints { ...context }/>
	<label className="symbol">+</label>
	<Coins { ...context }/>

</div>;

export default Wallet;
