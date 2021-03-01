import * as Icon from '../components/Icons';

export default {
	DESKTOP: 1240,
	TABLET: 985,
};

export const Menu = [
	{
		key: '',
		name: '',
		path: '/',
		icon: <Icon.Twitter style={{ fontSize: 30 }} />,
		selectedIcon: <Icon.Twitter style={{ fontSize: 30 }} />,
		notify: null,
	},
	{
		key: 'Home',
		name: 'Home',
		path: '/',
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
		key: 'Notification',
		name: 'Notification',
		path: '/notification',
		icon: <Icon.Notification />,
		selectedIcon: <Icon.Notificationfill />,
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
		key: 'Bookmark',
		name: 'Bookmark',
		path: '/bookmark',
		icon: <Icon.Bookmark />,
		selectedIcon: <Icon.Bookmarkfill />,
		notify: null,
	},
	{
		key: 'List',
		name: 'List',
		path: '/list',
		icon: <Icon.List />,
		selectedIcon: <Icon.Listfill />,
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
