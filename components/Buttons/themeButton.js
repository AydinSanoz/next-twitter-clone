import React from 'react';
import styles from './themeButton.module.css';
import Button from './button';
import cn from 'classnames';
import { Tweet } from '../Icons';
import TextBold from '../Typography/textBold';

function ThemeButton({
	title = 'Tweet',
	flat = false,
	children,
	className,
	...props
}) {
	return (
		<Button className={cn(styles.themeButton, className)} {...props}>
			{flat ? <Tweet /> : <TextBold bold>{title}</TextBold>}
		</Button>
	);
}

export default ThemeButton;
