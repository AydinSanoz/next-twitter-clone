import React from 'react';
import styles from './stack.module.css';
import cn from 'classnames';

function Stack({ gab = '10px', children, column = false }) {
	return (
		<div
			className={cn(styles.stack, column && styles.column)}
			style={{ '--gab': `${gab}px` }}
		>
			{children}
		</div>
	);
}

export default Stack;
