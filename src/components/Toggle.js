import React, { Fragment } from 'react';

const Toggle = (props) => {
	const { view } = props;
	console.log(props)

	return (
		<Fragment>
			<button type="button" disabled={view === 'result'}>
				By Result
			</button>
			<button type="button" disabled={view === 'conference'}>
				By Conference
			</button>
		</Fragment>
	)
}

export default Toggle;