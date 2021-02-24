import React from 'react';
import cn from 'classnames';
import styles from './titleButton.module.css';

function TitleButton({ children, className, ...props }) {
	return (
		<span className={cn(styles.titleButton, className)} {...props}>
			{children}
		</span>
	);
}

export default TitleButton;
