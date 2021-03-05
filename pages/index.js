import React from 'react';
import Tweet from '../components/Tweet';
import Layout from '../components/Layout/layout';
import useSwr from 'swr';
import { fetcher } from '../lib/fetcher';
import CircularBar from '../components/Icons/Loading';

function HomePage() {
	const { data, error } = useSwr('/api/movie', fetcher);

	const percentage = 1;
	return (
		<Layout>
			{!data ? (
				<CircularBar />
			) : (
				data?.results?.map((tweet) => <Tweet key={tweet.id} {...tweet} />)
			)}
		</Layout>
	);
}

export default HomePage;
