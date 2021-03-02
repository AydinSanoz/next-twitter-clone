import React from 'react';
import Layout from '../components/layout';
import Theme from '../components/theme';

function More({ Children }) {
	return (
		<Layout>
			<Theme />
			{Children}
		</Layout>
	);
}

export default More;
