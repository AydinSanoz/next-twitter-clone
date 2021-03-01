import React from 'react';
import cn from 'classnames';
import styles from './nav.module.css';
import MenuButton from './menuButton';
import TextBold from './textBold';
import {
	Twitter,
	Home,
	Homefill,
	Explore,
	Explorefill,
	Notification,
	Notificationfill,
	Messages,
	Messagesfill,
	Bookmark,
	Bookmarkfill,
	List,
	Listfill,
	Profile,
	Profilefill,
	More,
} from '../components/Icons';

const Menu = [
	{
		name: '',
		icon: <Twitter />,
		selectedIcon: <Twitter />,
		notify: null,
	},
	{
		name: 'Home',
		icon: <Home />,
		selectedIcon: <Homefill />,
		notify: null,
		selected: true,
	},
	{
		name: 'Explore',
		icon: <Explore />,
		selectedIcon: <Explorefill />,
		notify: null,
	},
	{
		name: 'Notification',
		icon: <Notification />,
		selectedIcon: <Notificationfill />,
		notify: 17,
	},
	{
		name: 'Messages',
		icon: <Messages />,
		selectedIcon: <Messagesfill />,
		notify: 22,
	},
	{
		name: 'Bookmark',
		icon: <Bookmark />,
		selectedIcon: <Bookmarkfill />,
		notify: null,
	},
	{
		name: 'List',
		icon: <List />,
		selectedIcon: <Listfill />,
		notify: null,
	},
	{
		name: 'Profile',
		icon: <Profile />,
		selectedIcon: <Profilefill />,
		notify: null,
	},
	{
		name: 'More',
		icon: <More />,
		selectedIcon: <More />,
		notify: null,
	},
];

function Nav({ flat = false, className, selectedKey = 'Home', ...props }) {
	return (
		<nav className={cn(styles.nav, className)} {...props}>
			{Menu.map((menu) => {
				const showTitle = !flat && menu.name.length > 0;
				return (
					<MenuButton notify={menu.notify} selected={selectedKey === menu.name}>
						{selectedKey === menu.name ? menu.selectedIcon : menu.icon}
						{showTitle && (
							<TextBold className={styles.text} bold>
								{menu.name}
							</TextBold>
						)}
					</MenuButton>
				);
			})}
		</nav>
	);
}
export default Nav;
