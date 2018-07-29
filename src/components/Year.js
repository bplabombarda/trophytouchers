import React from 'react';

const Year = (props) => {
	const { data } = props;

	console.log(data);

	return (
		<li id={`matchup-${data.year}`}>
			<div className="year">{data.year}</div>
			<div className="team-a">{data.w}</div>
			<div className="team-b">{data.l}</div>
		</li>
	)
}

export default Year;