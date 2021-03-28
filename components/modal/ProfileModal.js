import React from 'react';

import ProfileHeader from './profileHeader';
import Button from '../Buttons/button';
import TextBold from '../Typography/textBold';

import styles from './profileModal.module.css';
import { auth } from '../../firebase/firebase';
const user = auth.currentUser;
console.log('🚀 ~ file: profileModal.js ~ line 10 ~ user', user);

function ProfileModal({
	name = user?.displayName,
	slug = `@${user?.email.split('@')[0]}`,
	src = user?.photoURL,
}) {
	return (
		<div className={styles.modal}>
			<ProfileHeader
				className={styles.profile}
				src={src}
				name={name}
				slug={slug}
			/>
			<Button regular className={styles.button} href="/explore">
				<TextBold className={styles.account}>Add an existing account</TextBold>
			</Button>
			<Button
				regular
				className={styles.button}
				onClick={auth.signOut()}
				href="/"
			>
				<TextBold className={styles.logout}>Log out {slug}</TextBold>
			</Button>
		</div>
	);
}

export default ProfileModal;
