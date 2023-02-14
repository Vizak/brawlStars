import { React } from 'react';
import Character from './Character';

const Container = (context) => {
	const { state: { brawlers }} = context;

	return <div className="container">
		{brawlers.map((brawler, key) =>
			<Character
				key={ key }
				{ ...{ ...context, data: { brawler, key }} }
			/>)}</div>;
};

export default Container;
