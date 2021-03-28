import { useContext } from 'react';
import * as Icon from '../components/Icons';
import StoreContext from '../store/store';
import { auth } from '../firebase/firebase';

const user = auth.currentUser;

export default {
	DESKTOP: 1240,
	TABLET: 985,
};

export const Menu = [
	{
		key: 'Twitter',
		name: '',
		path: '/home',
		icon: <Icon.Twitter style={{ fontSize: 30 }} />,
		selectedIcon: <Icon.Twitter style={{ fontSize: 30 }} />,
		notify: null,
	},
	{
		key: 'Home',
		name: 'Home',
		path: '/home',
		icon: <Icon.Home />,
		selectedIcon: <Icon.Homefill />,
		notify: null,
		selected: true,
	},
	{
		key: 'Explore',
		name: 'Explore',
		path: '/explore',
		icon: <Icon.Explore />,
		selectedIcon: <Icon.Explorefill />,
		notify: null,
	},
	{
		key: 'Notifications',
		name: 'Notifications',
		path: '/notifications',
		icon: <Icon.Notifications />,
		selectedIcon: <Icon.Notificationsfill />,
		notify: 17,
	},
	{
		key: 'Messages',
		name: 'Messages',
		path: '/messages',
		icon: <Icon.Messages />,
		selectedIcon: <Icon.Messagesfill />,
		notify: 22,
	},
	{
		key: 'Bookmarks',
		name: 'Bookmarks',
		path: `bookmarks`,
		icon: <Icon.Bookmarks />,
		selectedIcon: <Icon.Bookmarksfill />,
		notify: null,
	},
	{
		key: 'Lists',
		name: 'Lists',
		path: '/lists',
		icon: <Icon.Lists />,
		selectedIcon: <Icon.Listsfill />,
		notify: null,
	},
	{
		key: 'Profile',
		name: 'Profile',
		path: '/profile',
		icon: <Icon.Profile />,
		selectedIcon: <Icon.Profilefill />,
		notify: null,
	},
	{
		key: 'More',
		name: 'More',
		path: '/more',
		icon: <Icon.More />,
		selectedIcon: <Icon.More />,
		notify: null,
	},
];

export const FooterMenu = [
	{
		name: 'Tweets',
		path: '',
		key: 'tweet',
	},
	{
		name: 'Tweets & Reply',
		path: '/withReply',
		key: 'withReply',
	},
	{
		name: 'Media',
		path: '/media',
		key: 'media',
	},
	{
		name: 'Likes',
		path: '/likes',
		key: 'likes',
	},
];
