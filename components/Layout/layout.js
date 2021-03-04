import React from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import styles from './layout.module.css';
import CONSTANT from '../../constants/constants';

import Sidebar from './colSidebar';
import Main from './colMain';
import Extra from './colExtra';

function Layout({ children, ...props }) {
	const size = useWindowSize();
	return (
		<div className={styles.layout}>
			<Sidebar flat={size.width < CONSTANT.DESKTOP}></Sidebar>
			<Main>{children}</Main>
			{size.width > CONSTANT.TABLET && <Extra>Extra</Extra>}
		</div>
	);
}

export default Layout;
