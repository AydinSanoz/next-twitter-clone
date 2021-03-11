import React from 'react';
import Layout from '../components/Layout/layout';
import Theme from '../components/Theme/theme';
import HeaderComp from '../components/Header/header';

function More({ children, ...props }) {
	return (
		<Layout>
			<HeaderComp>More</HeaderComp>
			<Theme />
			{children}
		</Layout>
	);
}

export default More;
