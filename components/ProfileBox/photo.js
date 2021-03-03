import { allSettled } from 'q';
import React from 'react';
import styles from './photo.module.css';

function Photo({
	src = 'https://pbs.twimg.com/profile_images/1331855336903495680/JlY7G8Qs_400x400.jpg',
	alt = 'profile-photo',
	...props
}) {
	return (
		<div className={styles.photo}>
			<img className={styles.img} src={src} alt={alt} />
		</div>
	);
}

export default Photo;
