import React from 'react';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow';

import IconButton from '../IconButton';
import * as Icon from '../Icons';
import Photo from '../ProfileBox/photo';

import styles from './tweet.module.css';

// adult: false
// backdrop_path: "/uuh6uNEGqLCU7wQ2L4xMqYv0DPr.jpg"
// genre_ids: (3) [878, 12, 28]
// id: 1895
// original_language: "en"
// original_title: "Star Wars: Episode III - Revenge of the Sith"
// overview: "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side."
// popularity: 29.536
// poster_path: "/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg"
// release_date: "2005-05-17"
// title: "Star Wars: Episode III - Revenge of the Sith"
// video: false
// vote_average: 7.3
// vote_count: 10083

function Tweet(props) {
	const src = props.poster_path
		? `https://image.tmdb.org/t/p/w500${props.poster_path}`
		: 'https://pbs.twimg.com/profile_images/1331855336903495680/JlY7G8Qs_400x400.jpg';

	return (
		<article className={styles.tweet} {...props}>
			{/* Avatar */}
			<div className={styles.avatar}>
				<Photo src={src} alt={props.title} />
			</div>

			{/* Body- */}
			<div className={styles.body}>
				{/* header */}
				<div className={styles.header}>
					<span>{props.title}</span>
					<span>@{props.title}</span>
					<span>{formatDistanceToNowStrict(new Date(props.release_date))}</span>
				</div>
				{/* text */}
				<div className={styles.tweetBody}>{props.overview}</div>

				{/* Image */}
				<div className={styles.container}>
					<img src={src} alt={props.title} className={styles.img} />
				</div>

				{/* footer */}
				<div className={styles.footer}>
					{/* reply */}
					<IconButton className={styles.footerButton}>
						<Icon.Message className={styles.actions} />
						<span>{props.popularity}</span>
					</IconButton>
					{/* retweet */}
					<IconButton className={styles.footerButton}>
						<Icon.Retweet className={styles.actions} />
						<span>{props.vote_average}</span>
					</IconButton>
					{/* Like */}
					<IconButton className={styles.footerButton}>
						<Icon.Like className={styles.actions} />
						<span>{props.vote_count}</span>
					</IconButton>
					{/* share */}
					<IconButton className={styles.footerButton}>
						<Icon.Share className={styles.actions} />
						<span>{props.vote_count}</span>
					</IconButton>
				</div>
			</div>
		</article>
	);
}

export default Tweet;
