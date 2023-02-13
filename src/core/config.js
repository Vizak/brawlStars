/* eslint-disable no-magic-numbers */
const config = {
	squareMultiplier: 450,
	squareMargin: 500,
	characters: [
		{
			name: 'Darryl',
			type: 'SuperRare',
			rank: 5,
			trophies: 44,
			image: '/image/Darryl.png',
		},
		{
			name: 'Shelly',
			type: 'Rare',
			rank: 3,
			trophies: 22,
			image: '/image/Shelly.png',
		},
		{
			name: 'Jessie',
			type: 'SuperRare',
			rank: 2,
			trophies: 10,
			image: '/image/Jessie.png',
		},
		{
			name: 'Nita',
			type: 'Rare',
			rank: 6,
			trophies: 61,
			image: '/image/Nita.png',
		},
		{
			name: 'ElPrimo',
			type: 'Rare',
			rank: 17,
			trophies: 61,
			image: '/image/ElPrimo.png',
		},
	],

	sortType:
	[
		'byRarity',
		'byRarityDesc',
		'MostTrophies',
		'LeastTrophies',
		'PowerLevel',
		'closestToNextRank',
	],
	Rarity: {
		common: 1,
		Rare: 2,
		SuperRare: 3,
		Epic: 4,
		Mythic: 5,
		Legendary: 6,
		Chromatic: 7,
	},
	rankTrophies: [
		0,
		10,
		20,
		30,
		40,
		60,
		80,
		100,
		120,
		140,
		160,
		180,
		220,
		260,
		300,
		340,
		380,
		420,
	],
};

export default config;
