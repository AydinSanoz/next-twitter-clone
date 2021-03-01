import React from 'react';

import useWindowSize from '../hooks/useWindowSize';
import styles from './layout.module.css';
import CONSTANT from '../constants/constants';

import Sidebar from '../components/col-sidebar';
import Main from '../components/col-main';
import Extra from '../components/col-extra';

function Layout({ children, ...props }) {
	const size = useWindowSize();
	return (
		<div className={styles.layout}>
			<Sidebar flat={size.width < CONSTANT.DESKTOP}>{size.width}</Sidebar>
			<Main>{children}</Main>
			{size.width > CONSTANT.TABLET && <Extra></Extra>}
		</div>
	);
}

export default Layout;
