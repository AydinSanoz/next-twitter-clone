import React from 'react';
import styles from './button.module.css';
import cn from 'classnames';

function Button({ big = false, full = false, children, className, ...props }) {
	return (
		<button
			className={cn(
				styles.button,
				full && styles.fullWidth,
				big && styles.big,
				className
			)}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
