import React from 'react';
import TextBold from '../components/textBold';

export default {
	title: 'Typography',
};

export const textBold = () => {
	return (
		<div>
			<TextBold bold>Hello World</TextBold>
			<TextBold>Hello World</TextBold>
		</div>
	);
};
