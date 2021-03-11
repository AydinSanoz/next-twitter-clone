import React from 'react';
import styles from './colMain.module.css';

function Main({ children, ...props }) {
	return <div className={styles.main}>{children}</div>;
}

export default Main;
