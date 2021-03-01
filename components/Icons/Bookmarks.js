import * as React from 'react';

function SvgBookmarks(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 26 26"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M21.558 25.458a.818.818 0 01-.479-.156L13 19.422l-8.08 5.883a.813.813 0 01-1.29-.658V6.067a2.441 2.441 0 012.437-2.438H19.93a2.441 2.441 0 012.438 2.438v18.579a.811.811 0 01-.813.812h.002zM13 17.604c.168 0 .336.052.477.156l7.269 5.29V6.067a.815.815 0 00-.813-.813H6.067a.815.815 0 00-.813.813V23.05l7.27-5.29a.802.802 0 01.476-.156z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgBookmarks;
