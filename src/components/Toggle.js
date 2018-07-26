import React, { Fragment } from 'react';

const Toggle = (props) => {
	const { view, toggleHandler } = props;

	return (
		<Fragment>
			<button
				type="button"
				disabled={view === 'result'}
				onClick={toggleHandler.bind(this)}>
				By Result
			</button>
			<button
				type="button"
				disabled={view === 'conference'}
				onClick={toggleHandler.bind(this)}>
				By Conference
			</button>
		</Fragment>
	)
}

export default Toggle;