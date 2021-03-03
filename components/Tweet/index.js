import React from 'react';
import IconButton from '../IconButton';

import * as Icon from '../Icons';
import Photo from '../profileBox/photo';
import styles from './tweet.module.css';
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNow';

function Tweet({ className, children, ...props }) {
	const tweet = {
		avatar: null,
		name: 'Cansu Dere',
		slug: 'cansudere',
		datetime: formatDistanceToNowStrict(new Date('2021, 01, 02'), {
			includeSeconds: false,
		}),
		tweet: {
			text:
				'Hiçbir korkuluğu kurt, ayı ve leopar şeklinde yapmamışlar.Zannediyorum ki insanlardan daha korkunç bir varlık bulamamışlar.~Thomas Hobbes ',
			reply: 8,
			retweet: 12,
			like: 7,
			share: 3,
		},
	};
	return (
		<article className={styles.tweet}>
			<div className={styles.avatar}>
				<Photo />
			</div>

			<div className={styles.body}>
				<div className={styles.header}>
					<span>{tweet.name}</span>
					<span>@{tweet.slug}</span>
					<span>{tweet.datetime}</span>
				</div>
				<div className={styles.tweetBody}>{tweet.tweet.text}</div>
				<div className={styles.footer}>
					<IconButton className={styles.footerButton}>
						<Icon.Message className={styles.actions} />
						<span>{tweet.tweet.reply}</span>
					</IconButton>
					<IconButton className={styles.footerButton}>
						<Icon.Retweet className={styles.actions} />
						<span>{tweet.tweet.retweet}</span>
					</IconButton>
					<IconButton className={styles.footerButton}>
						<Icon.Like className={styles.actions} />
						<span>{tweet.tweet.like}</span>
					</IconButton>
					<IconButton className={styles.footerButton}>
						<Icon.Share className={styles.actions} />
						<span>{tweet.tweet.share}</span>
					</IconButton>
				</div>
			</div>
		</article>
	);
}

export default Tweet;
