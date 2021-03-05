import * as React from 'react';

function CircularBar(props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="1em"
			height="1em"
			viewBox="0 0 100 100"
			preserveAspectRatio="xMidYMid"
			style={{ fontSize: '3rem', margin: '45%' }}
		>
			<circle
				cx="50"
				cy="50"
				r="36"
				stroke="#1da1f2"
				stroke-width="4"
				fill="none"
			></circle>
			<circle
				cx="50"
				cy="50"
				r="36"
				stroke="#05115b"
				stroke-width="3"
				stroke-linecap="round"
				fill="none"
			>
				<animateTransform
					attributeName="transform"
					type="rotate"
					repeatCount="indefinite"
					dur="1.3513513513513513s"
					values="0 50 50;180 50 50;720 50 50"
					keyTimes="0;0.5;1"
				></animateTransform>
				<animate
					attributeName="stroke-dasharray"
					repeatCount="indefinite"
					dur="1.3513513513513513s"
					values="22.61946710584651 203.5752039526186;70.12034802812418 156.0743230303409;22.61946710584651 203.5752039526186"
					keyTimes="0;0.5;1"
				></animate>
			</circle>
		</svg>
	);
}

export default CircularBar;
