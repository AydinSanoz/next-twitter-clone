import React from 'react';
import Tweet from '../components/Tweet/tweet';
import Layout from '../components/Layout/layout';
import useSwr from 'swr';
import { fetcher } from '../lib/fetcher';
import CircularBar from '../components/Icons/Loading';
import HeaderCom from '../components/Header/header';
import TweetBox from '../components/TweetBox/tweetBox';

function HomePage({ children, ...props }) {
	const { data, error } = useSwr('/api/movie', fetcher);

	return (
		<Layout>
			<HeaderCom>Home</HeaderCom>
			<TweetBox></TweetBox>
			{!data ? (
				<CircularBar />
			) : (
				data?.results?.map((tweet) => <Tweet key={tweet.id} {...tweet} />)
			)}
		</Layout>
	);
}

export default HomePage;
