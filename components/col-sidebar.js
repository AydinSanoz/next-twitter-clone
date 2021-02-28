import React from 'react';
import styles from './col-sidebar.module.css';
import Nav from '../components/nav';
import ThemeButton from './themeButton';
import ProfileBox from './profileBox';

function Sidebar({ children, ...props }) {
	return (
		<div className={styles.sidebar} {...props}>
			<Nav />
			<ThemeButton full big />
			<ProfileBox full />
		</div>
	);
}
export default Sidebar;
