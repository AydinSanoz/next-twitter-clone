import React from 'react';
import Photo from './photo';
import TextBold from '../Sidebar/textBold';
import { Option } from '../Icons';
import styles from './profileBox.module.css';
import Button from '../Sidebar/button';

function ProfileBox({
	flat = false,
	slug = '@cansudere',
	name = 'Cansu Dere',
	...props
}) {
	return (
		<Button className={styles.box} {...props}>
			<Photo />
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
