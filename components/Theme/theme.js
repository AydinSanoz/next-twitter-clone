import React, { useContext } from 'react';
import StoreContext from '../../store';
import styles from './theme.module.css';

function Theme() {
	const store = useContext(StoreContext);

	const THEME = {
		light: 'Light',
		dim: 'Dim',
		dark: 'Dark',
	};
	return (
		<div className={styles.container}>
			{['dark', 'dim', 'light'].map((theme) => (
				<label key={theme} className={styles.label}>
					<input
						className={styles.radio}
						type="radio"
						value={theme}
						name="theme"
						checked={store.theme === theme}
						onChange={(e) => store.changeTheme(e.target.value)}
					/>
					{THEME[theme]}
				</label>
			))}
		</div>
	);
}

export default Theme;
