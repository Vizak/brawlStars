import { React } from 'react';
import SortFunctions from '../services/sortFunctions';

const types = {
	LeastTrophies: (context) => SortFunctions.leastTrophies(context),
	MostTrophies: (context) => SortFunctions.maxTrophies(context),
	PowerLevel: (context) => SortFunctions.powerLevel(context),
	closestToNextRank: (context) => SortFunctions.closestToNextRank(context),
	byRarity: (context) => SortFunctions.byRarity(context),
	byRarityDesc: (context) => SortFunctions.byRarityDesc(context),
};
const Button = (context) => {
	const { state, setState, config: { sortType }} = context;
	const { btnIndex, sortModes } = state;

	return (
		<button
			className="button"
			onClick={ () => setState({
				...state,
				btnIndex: btnIndex + 1,
				sortModes: sortType[btnIndex % sortType.length],
				brawlers: types[sortModes](context),
			}) }
		>{sortModes}
		</button>);
};

export default Button;
