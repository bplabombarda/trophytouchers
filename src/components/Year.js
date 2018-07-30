import React from 'react';

const Year = (props) => {
	const { data, view } = props;

	let teamA;
	let teamB;
	let classesTeamA;
	let classesTeamB;

	if(view === 'conference') {
		teamA = data.w.conf === 'east' ? data.w : data.l;
		teamB = data.w.conf === 'west' ? data.w : data.l;
		classesTeamA = teamA.touch ? 'team-a touch' : 'team-a no-touch';
		classesTeamB = teamB.touch ? 'team-b touch' : 'team-b no-touch';
	} 
	else {
		teamA = data.w;
		teamB = data.l;
		classesTeamA = teamA.touch ? 'team-a touch' : 'team-a no-touch';
		classesTeamB = teamB.touch ? 'team-b touch' : 'team-b no-touch';
	}

	return (
		<li id={`matchup-${data.year}`}>
			<div className="year">{data.year}</div>
			<div className={classesTeamA}>{teamA.abbr}</div>
			<div className={classesTeamB}>{teamB.abbr}</div>
		</li>
	)
}

export default Year;