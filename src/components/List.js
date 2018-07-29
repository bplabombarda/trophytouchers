import React from 'react';
import Year from './Year';

const Table = (props) => {
	const { data, view } = props;

	return (
		<ul id="data-list">
			<li>
				<div>year</div>
				<div>{ view === 'result' ? 'winner' : 'east' }</div>
				<div>{ view === 'result' ? 'loser' : 'west' }</div>
			</li>
			{data.map(year => {
				return <Year key={year.year} data={year} view={view} />
			})}
		</ul> 
	)
}

export default Table;