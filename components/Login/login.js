import { useState } from 'react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoginImg from '../Icons/LoginImg';
import styles from './login.module.css';
import SignButton from '../Buttons/button';

function Login() {
	const [user, setUser] = useState('');
	const route = useRouter();

	useEffect(() => {
		user ? route.push('/home') : null;
	}, [user]);

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<div className={styles.img}>
					<LoginImg />
				</div>
				<div className={styles.text}>
					<div className={styles.textContainer}>
						<LoginImg />
						<h1>Şu anda olup bitenler</h1>
						<h3>Twitter'a bugün katıl</h3>
						<div className={styles.buttons}>
							<SignButton href="#" full big className={styles.themeButton}>
								Kaydol
							</SignButton>
							<SignButton href="#" full big className={styles.themeButton}>
								Register
							</SignButton>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<a href="#">Hakkında</a>
				<a href="#">Yardım Merkezi</a>
				<a href="#">Hizmet Şartları</a>
				<a href="#">Gizlilik Politikası</a>
				<a href="#">Çerez Politikası</a>
				<a href="#">Reklam Bilgisi</a>
				<a href="#">Blog</a>
				<a href="#">Durum</a>
				<a href="#">Kariyer</a>
				<a href="#">Marka Kaynakları</a>
				<a href="#">Reklam</a>
				<a href="#">Pazarlama</a>
				<a href="#">İşletmeler için Twitter</a>
				<a href="#">Geliştiriciler</a>
				<a href="#">Dizin</a>
				<a href="#">Ayarlar</a>
				<a href="#">© 2021 Twitter, Inc. </a>
			</div>
		</div>
	);
}

export default Login;
