import React from 'react';

const Year = (props) => {
	const { data } = props;

	return(
		<li>
			{data.year}
		</li>
	)
}

export default Year;