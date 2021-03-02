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
		icon: (
			<Icon.Twitter style={{ fontSize: 30, color: 'var(--c-text-primary)' }} />
		),
		selectedIcon: (
			<Icon.Twitter style={{ fontSize: 30, color: 'var(--c-text-primary)' }} />
		),
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
		path: '/bookmarks',
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
