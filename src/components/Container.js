import { React } from 'react';
import Character from './Character';

const Container = (context) => {
	const { state: { brawlers }} = context;

	return brawlers.map((brawler, key) =>
		<Character
			key={ key }
			{ ...{ ...context, data: { brawler, key }} }
		/>);
};

export default Container;
