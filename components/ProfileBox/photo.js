import React from 'react';
import styles from './photo.module.css';

// 'https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg';
// 'https://pbs.twimg.com/profile_images/1331855336903495680/JlY7G8Qs_400x400.jpg'

function Photo({
	src = 'https://pbs.twimg.com/profile_images/1331855336903495680/JlY7G8Qs_400x400.jpg',
	alt = 'profile-photo',
}) {
	console.log('src', src);
	return (
		<div className={styles.photo}>
			<img className={styles.img} src={src} alt={alt} />
		</div>
	);
}

export default Photo;
