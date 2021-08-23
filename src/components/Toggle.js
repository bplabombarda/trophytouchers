import React, { Fragment } from 'react';

const Toggle = (props) => {
	const { view, toggleHandler } = props;

	return (
		<div className="toggle-button-group">
			<button
				className={view === 'trophy' ? 'button-active' : 'button-disabled'}
				type="button"
				disabled={view === 'result'}
				onClick={toggleHandler.bind(this)}>
				By Result
			</button>
			<button
				className={view === 'result' ? 'button-active' : 'button-disabled'}
				type="button"
				disabled={view === 'trophy'}
				onClick={toggleHandler.bind(this)}>
				By Trophy
			</button>
		</div>
	)
}

export default Toggle;
