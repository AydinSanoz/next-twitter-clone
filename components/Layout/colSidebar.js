import React, { useContext, useState } from 'react';
import styles from './colSidebar.module.css';
import Nav from '../Navigation/nav';
import ThemeButton from '../Buttons/themeButton';
import ProfileBox from '../ProfileBox/profileBox';

import StoreContext from '../../store/store';

function Sidebar({ children, flat, ...props }) {
	const { onModalToggle } = useContext(StoreContext);

	return (
		<div className={styles.sidebar} {...props}>
			<div className={styles.nav}>
				<Nav flat={flat} />
			</div>

			<div className={styles.tweet}>
				<ThemeButton flat={flat} full big onClick={onModalToggle} />
			</div>
			<div className={styles.profile}>
				<ProfileBox flat={flat} full />
			</div>
		</div>
	);
}
export default Sidebar;
