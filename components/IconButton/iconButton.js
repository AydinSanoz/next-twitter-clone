import React from 'react';
import cn from 'classnames';

import styles from './iconButton.module.css';

function IconButton({ children, className, ...props }) {
	return (
		<button type="button" className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	);
}

export default IconButton;
