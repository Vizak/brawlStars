/* eslint-disable no-magic-numbers */

import { peek } from '@laufire/utils/debug';
import { rndBetween } from '@laufire/utils/lib';

const getCharacters = ({ config: { characters }}) =>
	characters.map((character) => ({
		...character,
		powerPoints: rndBetween(1, 500),
		powerLevel: rndBetween(1, 12),
		coins: rndBetween(1, 400),
	}));

const squareStyle = (context) => {
	const { data: { key },
		config: { size, squareMultiplier, squareMargin }} = context;

	peek(key);
	return {
		top: (Math.floor(key / 3) * 380) + 150,
		left: Math.floor((((key % 3) * squareMultiplier)
		+ squareMargin) * size) + 300,
		width: 150 * size,
		height: 150 * size,
	};
};

const leastTrophies = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => a.trophies - b.trophies);

const maxTrophies = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => b.trophies - a.trophies);

const powerLevel = ({ state: { brawlers }}) =>
	brawlers.sort((a, b) => b.powerLevel - a.powerLevel);

const byRarity = ({ config: { Rarity }, state: { brawlers }}) =>
	brawlers.sort((a, b) => Rarity[a.type] - Rarity[b.type]);

const byRarityDesc = ({ config: { Rarity }, state: { brawlers }}) =>
	brawlers.sort((a, b) => Rarity[b.type] - Rarity[a.type]);

const closestToNextRank = ({ config: { rankTrophies },
	state: { brawlers }}) =>
	brawlers.sort((a, b) =>
		(rankTrophies[a.rank] - a.trophies)
		- (rankTrophies[b.rank] - b.trophies));

const SortFunctions = {
	getCharacters,
	squareStyle,
	leastTrophies,
	maxTrophies,
	powerLevel,
	byRarity,
	byRarityDesc,
	closestToNextRank,
};

export default SortFunctions;
