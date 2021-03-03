import React from 'react';
import styles from './themeButton.module.css';
import Button from './button';
import cn from 'classnames';
import { Tweet } from './Icons';
import TextBold from './textBold';

function ThemeButton({
	flat = false,

	children = 'Tweet',
	className,
	...props
}) {
	return (
		<Button className={cn(styles.themeButton, className)} {...props}>
			{flat ? <Tweet /> : <TextBold bold>Tweet</TextBold>}
		</Button>
	);
}

export default ThemeButton;
