import React from 'react';
import Year from './Year';

const Table = (props) => {
	const { data } = props;

	return (
		<ul id="conference-data">
			{data.map(year => {
				return <Year key={year.year} data={year}/>
			})}
		</ul> 
	)
}

export default Table;