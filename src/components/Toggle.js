import React, { Fragment } from 'react';

const Toggle = (props) => {
	const { view } = props;

	return (
		<Fragment>
			<button type="button">By Result</button>
			<button type="button">By Conference</button>
		</Fragment>
	)
}

export default Toggle;