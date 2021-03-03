import React from 'react';
import styles from './colExtra.module.css';

function Extra({ children }) {
	return <div className={styles.extra}>{children}</div>;
}

export default Extra;
