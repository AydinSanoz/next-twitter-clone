import React from 'react';
import Tweet from '../components/Tweet';
import Layout from '../components/Layout/layout';
import useSwr from 'swr';
import { fetcher } from '../lib/fetcher';

function HomePage() {
	const { data, error } = useSwr('/api/movie', fetcher);

	return (
		<Layout>
			Main
			{data?.results?.map((tweet) => (
				<Tweet key={tweet.id} {...tweet} />
			))}
		</Layout>
	);
}

export default HomePage;
