import React from 'react';
import HeaderComp from '../components/Header/header';
import Layout from '../components/Layout/layout';

function Bookmarks({ children, ...props }) {
	return (
		<Layout>
			<HeaderComp>Bookmarks</HeaderComp>
			{children}
		</Layout>
	);
}

export default Bookmarks;
