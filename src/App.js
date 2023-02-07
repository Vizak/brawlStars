import { React, useState } from 'react';
import './App.scss';
import Container from './components/Container';
import Button from './components/Button/Button';
import BrawlersCount from './components/Heading/BrawlersCount';
import SortFunctions from './services/SortFunctions';

const brawlers = (context) => ({
	btnIndex: 1,
	sortModes: 'byRarity',
	brawlers: SortFunctions.getCharacters(context),
});

const App = (context) => {
	const [state, setState] = useState(brawlers(context));

	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<BrawlersCount { ...extendedContext }/>
		<Button { ...extendedContext }/>
		<Container { ...extendedContext }/>
	</div>;
};

export default App;
