import React, { useState } from 'react';
import Avatar from './avatar';
import TextBold from '../Typography/textBold';
import { Option } from '../Icons';
import styles from './profileBox.module.css';
import Button from '../Buttons/button';
import ProfileModal from '../Modal/ProfileModal';

function ProfileBox({
	src,
	flat = false,
	slug = '@cansudere',
	name = 'Cansu Dere',
	...props
}) {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleModal() {
		setModalIsOpen(!modalIsOpen);
	}
	return (
		<Button className={styles.box} onClick={handleModal} {...props}>
			{modalIsOpen && <ProfileModal className={styles.modal} />}
			<Avatar src={src} />
			{!flat && (
				<>
					<div className={styles.body}>
						<TextBold bold small>
							{name}
						</TextBold>
						<TextBold gray small>
							{slug}
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
