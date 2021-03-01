import React from 'react';
import Layout from '../components/layout';
import useWindowSize from '../hooks/useWindowSize';
import Sidebar from '../components/col-sidebar';
import Main from '../components/col-main';
import Extra from '../components/col-extra';
import CONSTANT from '../constants/constants';

function HomePage() {
	const size = useWindowSize();
	return (
		<Layout>
			<Sidebar flat={size.width < CONSTANT.DESKTOP}>{size.width}</Sidebar>
			<Main>{JSON.stringify(size)}</Main>
			<Extra>{CONSTANT.DESKTOP}</Extra>
		</Layout>
	);
}

export default HomePage;
