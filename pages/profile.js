import Layout from '../components/Layout/layout';
import ProfileCard from '../components/ProfileSettings/profileCard';
import Tweet from '../components/Tweet/tweet';
import CircularBar from '../components/Icons/Loading';
import { fetcher } from '../lib/fetcher';
import useSWR from 'swr';

function Profile({ Children }) {
	const { data, error } = useSWR('./api/movie', fetcher);
	return (
		<Layout>
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
