import React from 'react';
import * as Icons from '../components/Icons';
import Avatar from '../components/ProfileBox/avatar';
import ProfileBox from '../components/ProfileBox/profileBox';

export default {
	title: 'Icons',
};

export const Icon = () => (
	<div className="Icon">
		<Icons.Bookmarksfill />
		<Icons.Calender />
		<Icons.Chart />
		<Icons.Emoji />
		<Icons.Explore />
		<Icons.Explorefill />
		<Icons.Gif />
		<Icons.Home />
		<Icons.Homefill />
		<Icons.Like />
		<Icons.Likefill />
		<Icons.Lists />
		<Icons.Listsfill />
		<Icons.Media />
		<Icons.Message />
		<Icons.Messages />
		<Icons.Messagesfill />
		<Icons.More />
		<Icons.Notifications />
		<Icons.Notificationsfill />
		<Icons.Option />
		<Icons.Profile />
		<Icons.Profilefill />
		<Icons.Retweet />
		<Icons.Search />
		<Icons.Setting />
		<Icons.Share />
		<Icons.Star />
		<Icons.Twitter />
		<Icons.World />
	</div>
);

export const Photo = () => <Avatar></Avatar>;

export const Profile = () => <ProfileBox full></ProfileBox>;
