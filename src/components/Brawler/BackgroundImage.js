import { React } from 'react';

const BackgroundImage = ({ data: { brawler }}) =>
	<div>
		<img
			src={ brawler.image }
			alt="e"
			height="190px"
			width="300px"
		/>
	</div>;

export default BackgroundImage;
