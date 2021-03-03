import React from 'react';
import styles from './colSidebar.module.css';
import Nav from '../Sidebar/nav';
import ThemeButton from '../Sidebar/themeButton';
import ProfileBox from '../profileBox/profileBox';

function Sidebar({ children, flat, ...props }) {
	return (
		<div className={styles.sidebar} {...props}>
			<div className={styles.nav}>
				<Nav flat={flat} />
			</div>

			<div className={styles.tweet}>
				<ThemeButton flat={flat} full big />
			</div>
			<div className={styles.profile}>
				<ProfileBox flat={flat} full />
			</div>
		</div>
	);
}
export default Sidebar;
