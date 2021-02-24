import React from 'react';
import MenuButton from './menuButton';
import TitleButton from './titleButton';
import {
	Twitter,
	Home,
	Explore,
	Notification,
	Message,
	Bookmark,
	List,
	Profile,
	More,
} from '../components/Icons';
import cn from 'classnames';
import styles from './nav.module.css';

function Nav({ className, ...props }) {
	return (
		<nav className={cn(styles.nav, className)} {...props}>
			<MenuButton>
				<Twitter />
			</MenuButton>
			<MenuButton>
				<Home /> <TitleButton>Home</TitleButton>
			</MenuButton>
			<MenuButton>
				<Explore /> <TitleButton>Explore</TitleButton>
			</MenuButton>
			<MenuButton>
				<Notification /> <TitleButton>Notification</TitleButton>
			</MenuButton>
			<MenuButton>
				<Message /> <TitleButton>Message</TitleButton>
			</MenuButton>
			<MenuButton>
				<Bookmark /> <TitleButton>Bookmark</TitleButton>
			</MenuButton>
			<MenuButton>
				<List /> <TitleButton>List</TitleButton>
			</MenuButton>
			<MenuButton>
				<Profile /> <span>Profile</span>
			</MenuButton>
			<MenuButton>
				<More /> <span>More</span>
			</MenuButton>
		</nav>
	);
}
export default Nav;
