import React from 'react';
import Avatar from '../ProfileBox/avatar';
import TextBold from '../Typography/textBold';
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
			<Avatar className={styles.avatar} src={src} />

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
