import { React } from 'react';

const BrawlerName = ({ data: { brawler }}) => <div className="brawlerName">
	{brawler.name}
</div>;

export default BrawlerName;
