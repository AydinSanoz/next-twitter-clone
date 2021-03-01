import { StyleSheet } from 'globalthis/implementation';
import React from 'react';
import Photo from './photo';
import TextBold from './textBold';
import { Option, Setting } from './Icons';
import styles from './profileBox.module.css';
import Button from './button';

function ProfileBox({ slug = '@cansudere', name = 'Cansu Dere', ...props }) {
	return (
		<Button className={styles.box} {...props}>
			<Photo />
			<div className={styles.body}>
				<TextBold className={styles.name} bold>
					{name}
				</TextBold>
				<TextBold className={styles.slug}>{slug}</TextBold>
			</div>
			<div className={styles.icon}>
				<Option />
			</div>
		</Button>
	);
}

export default ProfileBox;