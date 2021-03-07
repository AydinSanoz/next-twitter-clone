import React from 'react';
import cn from 'classnames';
import styles from './textBold.module.css';

function TextBold({
	small = false,
	gray = false,
	bold = false,
	children,
	className,
	...props
}) {
	return (
		<span
			className={cn(
				styles.textRegular,
				bold && styles.textBold,
				small && styles.small,
				gray && styles.gray,
				className
			)}
			{...props}
		>
			{children}
		</span>
	);
}

export default TextBold;
