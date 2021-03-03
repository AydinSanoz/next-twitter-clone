import React from 'react';
import Layout from '../components/layout/layout';
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
