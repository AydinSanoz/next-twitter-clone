import React from 'react';
import styles from './themeButton.module.css';
import Button from './button';
import cn from 'classnames';
import { Tweet } from './Icons';

function ThemeButton({
	flat = false,
	children = 'Tweet',
	className,
	...props
}) {
	return (
		<Button className={cn(styles.themeButton, className)} {...props}>
			{flat ? <Tweet /> : 'Tweet'}
		</Button>
	);
}

export default ThemeButton;
