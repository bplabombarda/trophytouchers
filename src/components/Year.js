import React from 'react';

const Year = (props) => {
	const { data } = props;

	return(
		<li>
			{`${data.year}: ${data.w} vs ${data.l}`}
		</li>
	)
}

export default Year;