import { React } from 'react';
import Square from './Square';

const Brawler = (context) => {
	const { state: { brawlers }} = context;

	return brawlers.map((brawler, key) =>
		<Square
			key={ key }
			{ ...{ ...context, data: { brawler, key }} }
		/>);
};

export default Brawler;
