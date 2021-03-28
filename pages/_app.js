import { useState, useEffect } from 'react';
import StoreContext from '../store/store';
import { auth } from '../firebase/firebase';
import { useRouter } from 'next/router';

import '../styles/app.css';
import '../styles/variables.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
	const [theme, setTheme] = useState('light');
	const [showModal, setShowModal] = useState(false);
	const [user, setUser] = useState('');
	const router = useRouter();

	const changeTheme = (theme) => {
		setTheme(theme);
		localStorage.setItem('THEME', theme);
	};

	const onModalToggle = () => {
		setShowModal(!showModal);
	};

	useEffect(() => {
		const theme = localStorage.getItem('THEME');
		setTheme(theme);
		const $html = document.querySelector('html');
		$html.classList.add(theme);
		return () => {
			$html.classList.remove(theme);
		};
	}, [theme]);

	useEffect(() => {
		auth.onAuthStateChanged((currentUser) => {
			!user ? router.push('/') : setUser(currentUser);
		});
	}, [auth.currentUser]);

	return (
		<StoreContext.Provider
			value={{ theme, changeTheme, onModalToggle, showModal, user, setUser }}
		>
			<Component {...pageProps} />
		</StoreContext.Provider>
	);
}
