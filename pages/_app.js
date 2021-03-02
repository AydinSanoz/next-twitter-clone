import { useState, useEffect } from 'react';
import StoreContext from '../store';

import '../styles/app.css';
import '../styles/variables.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState(() => {
		try {
			return localStorage.getItem('THEME');
		} catch (error) {
			return 'light';
		}
	});

	const changeTheme = (theme) => {
		setTheme(theme);
		localStorage.setItem('THEME', theme);
	};

	useEffect(() => {
		const $html = document.querySelector('html');
		$html.classList.add(theme);
		return () => {
			$html.classList.remove(theme);
		};
	}, [theme]);

	return (
		<StoreContext.Provider value={{ theme, changeTheme }}>
			<Component {...pageProps} />
		</StoreContext.Provider>
	);
}
