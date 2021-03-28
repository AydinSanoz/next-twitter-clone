import React from 'react';
import styles from './avatar.module.css';
import cn from 'classnames';

// 'https://image.tmdb.org/t/p/w500/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg';
// 'https://pbs.twimg.com/profile_images/1331855336903495680/JlY7G8Qs_400x400.jpg'

function Avatar({
	src = 'https://dummyimage.com/600x400/c2b8c2/ffffff.jpg&text=no+img',
	alt = null,
	...props
}) {
	return (
		<div className={cn(styles.avatar)} {...props}>
			<img className={styles.img} src={src} alt={alt} />
		</div>
	);
}

export default Avatar;
