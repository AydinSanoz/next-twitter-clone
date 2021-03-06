import React from 'react';
import Photo from './photo';
import TextBold from '../Sidebar/textBold';
import { Option } from '../Icons';
import styles from './profileHeader.module.css';
import cn from 'classnames';

function ProfileHeader({
	src,
	slug = '@cansudere',
	name = 'Cansu Dere',
	className,
	...props
}) {
	return (
		<div className={cn(styles.box, className)} {...props}>
			<Photo className={styles.photo} src={src} />

			<div className={styles.body}>
				<TextBold bold>{name}</TextBold>
				<TextBold className={styles.slug}>{slug}</TextBold>
			</div>
			<div className={styles.icon}>
				<Option />
			</div>
		</div>
	);
}

export default ProfileHeader;
