import React from 'react';
import MenuButton from './menuButton';
import TextBold from './textBold';
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
				<TextBold>Home</TextBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Explore'}>
				<Explore /> <TextBold>Explore</TextBold>
			</MenuButton>
			<MenuButton notify={7} selected={selectedKey === 'Notification'}>
				<Notification /> <TextBold>Notification</TextBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Message'}>
				<Message /> <TextBold>Message</TextBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Bookmark'}>
				<Bookmark /> <TextBold>Bookmark</TextBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'List'}>
				<List /> <TextBold>List</TextBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'Profile'}>
				<Profile /> <TextBold>Profile</TextBold>
			</MenuButton>
			<MenuButton selected={selectedKey === 'More'}>
				<More /> <TextBold>More</TextBold>
			</MenuButton>
		</nav>
	);
}
export default Nav;
