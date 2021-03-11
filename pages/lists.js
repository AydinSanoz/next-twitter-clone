import React from 'react';
import Layout from '../components/Layout/layout';
import HeaderComp from '../components/Header/header';

function Lists({ children, ...props }) {
	return (
		<Layout>
			<HeaderComp>Lists</HeaderComp>
		</Layout>
	);
}

export default Lists;
