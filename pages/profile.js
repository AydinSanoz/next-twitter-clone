import Layout from '../components/Layout/layout';
import ProfileCard from '../components/ProfileSettings/profileCard';
import Tweet from '../components/Tweet/tweet';
import CircularBar from '../components/Icons/Loading';
import { fetcher } from '../lib/fetcher';
import useSWR from 'swr';
import HeaderComp from '../components/Header/header';

function Profile({ children, ...props }) {
	const { data, error } = useSWR('./api/movie', fetcher);
	return (
		<Layout>
			<HeaderComp>Profile</HeaderComp>
			<ProfileCard />
			{!data ? (
				<CircularBar />
			) : (
				data.results.map((tweet) => <Tweet key={tweet.id} {...tweet}></Tweet>)
			)}
		</Layout>
	);
}

export default Profile;
