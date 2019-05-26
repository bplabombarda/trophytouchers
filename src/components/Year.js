import React from 'react';

const Year = (props) => {
	const { data, view } = props;

	let teamA;
	let teamB;
	let classesTeamA;
	let classesTeamB;

	if(view === 'conference') {
		teamA = data.east;
		teamB = data.west;
		classesTeamA = teamA.touch ? 'team-a touch' : 'team-a no-touch';
		classesTeamB = teamB.touch ? 'team-b touch' : 'team-b no-touch';
	} else {
		teamA = data.east.winner ? data.east : data.west;
		teamB = data.east.winner ? data.west : data.east;
		classesTeamA = teamA.touch ? 'team-a touch' : 'team-a no-touch';
		classesTeamB = teamB.touch ? 'team-b touch' : 'team-b no-touch';
	}

	const teamAAbbr = (teamA.winner === 'N/A' && view === 'result')
		? 'N/A'
		: teamA.abbr
	const teamBAbbr = (teamB.winner === 'N/A' && view === 'result')
		? 'N/A'
		: teamB.abbr

	return (
		<li id={`matchup-${ data.year }`}>
			<div className="year">{ data.year }</div>
			<div className={ classesTeamA }>{ teamAAbbr }</div>
			<div className={ classesTeamB }>{ teamBAbbr }</div>
		</li>
	)
}

export default Year;
