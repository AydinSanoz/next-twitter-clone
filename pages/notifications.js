import React from 'react';
import Layout from '../components/Layout/layout';
import HeaderComp from '../components/Header/header';

function Notifications({ children, ...props }) {
	return (
		<Layout>
			<HeaderComp>Notifications</HeaderComp>
		</Layout>
	);
}

export default Notifications;
