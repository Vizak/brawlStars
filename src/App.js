import { React, useState } from 'react';
import './App.scss';
import Brawler from './components/Brawler';
import SortFunctions from './services.js/SortFunctions';

const brawlers = (context) => ({
	btnIndex: 1,
	sortModes: 'byRarity',
	brawlers: SortFunctions.getCharacters(context),
});

const App = (context) => {
	const [state, setState] = useState(brawlers(context));

	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Brawler { ...extendedContext }/>
	</div>;
};

export default App;
