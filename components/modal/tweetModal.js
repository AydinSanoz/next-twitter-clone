import React from 'react';
import Modal from 'react-modal';
import * as Icon from '../Icons';
import Avatar from '../ProfileBox/avatar';
import Button from '../Buttons/button';
import styles from './tweetModal.module.css';
import TextareaAutosize from 'react-textarea-autosize';

import TextBold from '../Typography/textBold';
import IconButton from '../IconButton/iconButton';
import TweetBox from '../TweetBox/tweetBox';

const customStyles = {
	overlay: {},
	content: {
		width: '600px',
		margin: 'auto',
		minHeight: '300px',
		height: 'fit-content',
		top: '5%',
		backgroundColor: 'var(--c-bg-primary)',
		padding: '0px',
		borderRadius: '15px',
		position: 'sticky',
	},
};

function TweetModal({ isOpen, onRequestClose, children, ...props }) {
	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
			<div className={styles.closeTitle}>
				<IconButton
					full
					regular
					className={styles.iconCloseBtn}
					onClick={onRequestClose}
				>
					<Icon.Close />
				</IconButton>
			</div>
			<div className={styles.container}>
				<Avatar className={styles.avatar} />

				<div className={styles.content}>
					<TextareaAutosize placeholder="What is happening" />
					<Button>
						<Icon.Globe className={styles.globe} /> Everyone can reply
					</Button>
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
						<div className={styles.navRight}>
							<Button className={styles.tweetButton} full>
								<TextBold>Tweet</TextBold>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}

export default TweetModal;
