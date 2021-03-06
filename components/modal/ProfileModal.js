import React from 'react';
import ProfileHeader from '../ProfileBox/profileHeader';
import Button from '../Sidebar/button';
import TextBold from '../Sidebar/textBold';
import styles from './ProfileModal.module.css';

function ProfileModal({ name = 'Cansu Dere ', slug = '@cansudere', src }) {
	return (
		<div className={styles.modal}>
			<ProfileHeader
				className={styles.profile}
				src={src}
				name={name}
				slug={slug}
			/>
			<button className={styles.button} href="/explore">
				<TextBold className={styles.account}>Add an existing account</TextBold>
			</button>
			<button className={styles.button} href="/">
				<TextBold className={styles.logout}>Log out {slug}</TextBold>
			</button>
		</div>
	);
}

export default ProfileModal;
