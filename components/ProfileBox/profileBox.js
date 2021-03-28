import React, { useState } from 'react';
import Avatar from './avatar';
import TextBold from '../Typography/textBold';
import { Option } from '../Icons';
import styles from './profileBox.module.css';
import Button from '../Buttons/button';
import ProfileModal from '../Modal/profileModal';
import { auth } from '../../firebase/firebase';

function ProfileBox({
	src,
	flat = false,
	slug = '@cansudere',
	name = 'Cansu Dere',
	...props
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const user = auth.currentUser;
	console.log('🚀 ~ file: profileBox.js ~ line 19 ~ user', user);

	function handleModal() {
		setModalIsOpen(!modalIsOpen);
	}
	return (
		<Button className={styles.box} onClick={handleModal} {...props}>
			{modalIsOpen && <ProfileModal className={styles.modal} />}
			<Avatar src={user?.photoURL} />
			{!flat && (
				<>
					<div className={styles.body}>
						<TextBold bold small>
							{user?.displayName}
						</TextBold>
						<TextBold gray small>
							{`@${user?.email?.split('@')[0]}`}
						</TextBold>
					</div>
					<div className={styles.icon}>
						<Option />
					</div>
				</>
			)}
		</Button>
	);
}

export default ProfileBox;
