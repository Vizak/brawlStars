import { React } from 'react';

const BrawlersCount = ({ state: { brawlers }}) =>
	<div className="title"> Brawlers: {brawlers.length} / 64</div>;

export default BrawlersCount;
