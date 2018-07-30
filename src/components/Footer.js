import React from 'react';

const Footer = (props) => {
	return (
		<footer>
			<div className="legend">
				<div className="legend-icon legend-touch"></div>
        		Touched conference trophy.
			</div>
			<div className="legend">
				<div className="legend-icon legend-notouch"></div>
				Did not touch conference trophy.
			</div>
		</footer>
	)
}

export default Footer;