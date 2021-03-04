import React from 'react';
import Layout from '../components/Layout/layout';
import Theme from '../components/theme/theme';

function More({ Children }) {
	return (
		<Layout>
			<Theme />
			{Children}
		</Layout>
	);
}

export default More;
