import React from 'react';
import styles from './button.module.css';

function button({ children }) {
	return (
		<div>
			<button className= {styles.button}>{children}</button>
		</div>
	);
}

export default button;
