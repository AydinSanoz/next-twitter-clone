import React, { useState } from 'react';
import * as Icon from '../Icons';
import Avatar from '../ProfileBox/avatar';
import Button from '../Buttons/button';
import styles from './tweetBox.module.css';
import TextareaAutosize from 'react-textarea-autosize';

import TextBold from '../Typography/textBold';
import IconButton from '../IconButton/iconButton';
import { db } from '../../firebase/firebase';

function TweetBox({
	avatar,
	className,
	isOpen,
	onRequestClose,
	children,
	...props
}) {
	const [input, setInput] = useState('');

	function handleChange(e) {
		setInput(e.target.value);
	}
	function handleSubmit() {
		console.log(db);
		db.collection('tweets').add({
			name: 'aydin',
			id: 12,
			text: `${input}`,
		});
		setInput('');
	}
	return (
		<div className={styles.tweetBox}>
			<div className={styles.container}>
				<Avatar className={styles.avatar} />
				<div className={styles.content}>
					<TextareaAutosize
						placeholder="What is happening?"
						onChange={handleChange}
						value={input}
					/>
					<div className={styles.footer}>
						<div className={styles.navLeft}>
							<IconButton>
								<Icon.Media />
							</IconButton>
							<IconButton>
								<Icon.Gif />
							</IconButton>
							<IconButton>
								<Icon.Chart />
							</IconButton>
							<IconButton>
								<Icon.Emoji />
							</IconButton>
							<IconButton>
								<Icon.Calender />
							</IconButton>
						</div>

						<Button className={styles.tweetButton} full onClick={handleSubmit}>
							<TextBold>Tweet</TextBold>
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.boxBottom}></div>
		</div>
	);
}

export default TweetBox;
