import * as React from 'react';

function SvgNotifications(props) {
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
				d="M23.505 17.84c-.022-.017-2.318-1.776-2.278-6.532.021-2.743-.88-5.18-2.543-6.863-1.49-1.51-3.507-2.343-5.679-2.354h-.014c-2.17.01-4.188.845-5.678 2.355C5.65 6.128 4.747 8.565 4.77 11.308c.04 4.69-2.188 6.464-2.277 6.532a.813.813 0 00.484 1.466h5.33c.11 2.503 2.164 4.507 4.69 4.507 2.528 0 4.58-2.004 4.688-4.507h5.333c.349 0 .66-.223.769-.557a.81.81 0 00-.285-.908h.002zM13 22.185a3.078 3.078 0 01-3.064-2.88h6.128c-.109 1.603-1.434 2.882-3.064 2.882v-.003zM4.745 17.68c.802-1.226 1.677-3.28 1.651-6.387-.02-2.34.698-4.314 2.072-5.706 1.184-1.2 2.795-1.864 4.532-1.871 1.737.008 3.344.671 4.528 1.872 1.376 1.392 2.094 3.365 2.075 5.706-.026 3.107.85 5.162 1.652 6.387H4.745v-.001z"
				fill="currentColor"
			/>
		</svg>
	);
}

export default SvgNotifications;
