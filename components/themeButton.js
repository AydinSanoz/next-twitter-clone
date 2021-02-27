import React from 'react';
import styles from './themeButton.module.css';
import Button from './button';
import cn from 'classnames';

function ThemeButton({ children, className, ...props }) {
	return (
		<Button className={cn(styles.themeButton, className)} {...props}>
			{children}
		</Button>
	);
}

export default ThemeButton;
