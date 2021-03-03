import React from 'react';
import cn from 'classnames';
import styles from './textBold.module.css';

function TextBold({ bold = false, children, className, ...props }) {
	return (
		<span
			className={cn(styles.textRegular, bold && styles.textBold, className)}
			{...props}
		>
			{children}
		</span>
	);
}

export default TextBold;
