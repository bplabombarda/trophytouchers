import React from 'react';
import Year from './Year';

const Table = (props) => {
	const { data, view } = props;

	return (
		<ul id="data-list">
			<li className="data-header">
				<div>year</div>
				<div>{ view === 'result' ? 'winner' : 'east' }</div>
				<div>{ view === 'result' ? 'loser' : 'west' }</div>
			</li>
			{
				data.map((matchup) => (
					<Year
						key={ matchup.year }
						data={ matchup }
						view={ view }
						/>
				))
			}
		</ul> 
	)
}

export default Table;
