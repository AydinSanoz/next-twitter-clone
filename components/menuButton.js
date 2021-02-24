import React from 'react';
import styles from './menuButton.module.css';
import Button from './button';
import cn from 'classnames';

function MenuButton({ children, className, ...props }) {
	return (
		<Button className={cn(styles.menuButton, className)} {...props}>
			{children}
		</Button>
	);
}

export default MenuButton;
