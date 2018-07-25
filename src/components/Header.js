import React from 'react';
import Toggle from './Toggle';

const Header = (props) => {
	const { view } = props;
	let subheader;

	if (view === 'conference') {
      subheader = <h3>By Conference</h3>;
    } else {
      subheader = <h3>By Result</h3>;
    }

	return (
		<header>
			<h1>Trophy Touchers</h1>
			{ subheader }
			<Toggle />
		</header>
	)
}

export default Header;