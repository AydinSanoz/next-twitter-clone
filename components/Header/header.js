import React from 'react';
import TextBold from '../Typography/textBold';
import cn from 'classnames';
import styles from './header.module.css';

function HeaderComp({ className, children, ...props }) {
	return (
		<div className={cn(styles.container, className)} {...props}>
			<TextBold bold>{children}</TextBold>
		</div>
	);
}

export default HeaderComp;
