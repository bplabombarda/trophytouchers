import React from 'react';

const Year = (props) => {
	const { data, view } = props;

	let teamA;
	let teamB;
	const classesTeamA = data.w_touch ? 'team-a touch' : 'team-a no-touch';
	const classesTeamB = data.l_touch ? 'team-b touch' : 'team-b no-touch';

	if(view === 'conference') {
		teamA = data.w_conf === 'east' ? data.w : data.l
		teamB = data.w_conf === 'west' ? data.w : data.l
	} 
	else {
		teamA = data.w;
		teamB = data.l;
	}

	return (
		<li id={`matchup-${data.year}`}>
			<div className="year">{data.year}</div>
			<div className={classesTeamA}>{teamA}</div>
			<div className={classesTeamB}>{teamB}</div>
		</li>
	)
}

export default Year;