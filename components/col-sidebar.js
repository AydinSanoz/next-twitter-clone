import React from 'react';
import styles from './col-sidebar.module.css';
import Nav from '../components/nav';
import ThemeButton from './themeButton';
import ProfileBox from './profileBox';

function Sidebar({ children, flat, ...props }) {
	return (
		<div className={styles.sidebar} {...props}>
			<div className={styles.nav}>
				<p>{JSON.stringify(flat)}</p>
				<Nav />
			</div>

			<div className={styles.tweet}>
				<ThemeButton full big />
			</div>
			<div className={styles.profile}>
				<ProfileBox full />
			</div>
		</div>
	);
}
export default Sidebar;
