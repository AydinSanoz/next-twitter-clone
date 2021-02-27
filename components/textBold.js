import React from 'react';
import cn from 'classnames';
import styles from './textBold.module.css';

function TextBold({ children, className, ...props }) {
	return (
		<span className={cn(styles.textBold, className)} {...props}>
			{children}
		</span>
	);
}

export default TextBold;
