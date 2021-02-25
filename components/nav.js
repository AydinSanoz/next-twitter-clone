import React from 'react';
import MenuButton from './menuButton';
import TitleBold from './titleBold';
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
	Homefill,
} from '../components/Icons';
import cn from 'classnames';
import styles from './nav.module.css';

function Nav({ className, selectedKey, ...props }) {
	return (
		<nav className={cn(styles.nav, className)} {...props}>
			<MenuButton>
				<Twitter />
			</MenuButton>
			<MenuButton selected={selectedKey === 'Home'}>
				{selectedKey === 'Home' ? <Homefill /> : <Home />}
				<TitleBold>Home</TitleBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Explore'}>
				<Explore /> <TitleBold>Explore</TitleBold>
			</MenuButton>
			<MenuButton notify={7} selected={selectedKey === 'Notification'}>
				<Notification /> <TitleBold>Notification</TitleBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Message'}>
				<Message /> <TitleBold>Message</TitleBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Bookmark'}>
				<Bookmark /> <TitleBold>Bookmark</TitleBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'List'}>
				<List /> <TitleBold>List</TitleBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Profile'}>
				<Profile /> <TitleBold>Profile</TitleBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'More'}>
				<More /> <TitleBold>More</TitleBold>
			</MenuButton>
		</nav>
	);
}
export default Nav;
