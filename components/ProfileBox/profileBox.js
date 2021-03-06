import React, { useState } from 'react';
import Photo from './photo';
import TextBold from '../Sidebar/textBold';
import { Option } from '../Icons';
import styles from './profileBox.module.css';
import Button from '../Sidebar/button';
import ProfileModal from '../modal/ProfileModal';

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
			<Photo src={src} />
			{!flat && (
				<>
					<div className={styles.body}>
						<TextBold className={styles.name} bold>
							{name}
						</TextBold>
						<TextBold className={styles.slug}>{slug}</TextBold>
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
