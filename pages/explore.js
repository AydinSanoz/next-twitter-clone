import React from 'react';
import Layout from '../components/Layout/layout';
import HeaderComp from '../components/Header/header';

function Explore({ children, ...props }) {
	return (
		<Layout>
			<HeaderComp>Explore</HeaderComp>
		</Layout>
	);
}

export default Explore;
