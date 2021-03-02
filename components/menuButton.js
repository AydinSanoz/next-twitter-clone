import React from 'react';
import styles from './menuButton.module.css';
import Button from './button';
import cn from 'classnames';

function MenuButton({ notify, children, className, selected, ...props }) {
	return (
		<Button
			className={cn(
				styles.menuButton,
				selected && styles.selectedMenuButton,
				className
			)}
			{...props}
		>
			{notify && <span className={styles.notify}>{notify}</span>}
			{children}
		</Button>
	);
}

export default MenuButton;
