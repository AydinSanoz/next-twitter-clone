import React from 'react';
import cn from 'classnames';
import styles from './titleBold.module.css';

function TitleBold({ children, className, ...props }) {
	return (
		<span className={cn(styles.titleBold, className)} {...props}>
			{children}
		</span>
	);
}

export default TitleBold;
