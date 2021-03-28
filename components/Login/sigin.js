import React, { useState, useEffect, useContext } from 'react';
import LoginImg from '../Icons/LoginImg';
import styles from './signin.module.css';
import Button from '../Buttons/button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import cn from 'classnames';
import { auth } from '../../firebase/firebase';
import { useRouter } from 'next/router';

import * as Yup from 'yup';
import StoreContext from '../../store/store';

const validationScheme = Yup.object({
	email: Yup.string().email('Invalid Email Format').required('Email required'),
	password: Yup.string()
		.required('Please Enter your password')
		.min(6, 'Minumum 6 character'),
	// .matches(
	// 	/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/
	// Password must contain at least 8 characters, one uppercase, one number, one special characer//
	// ),
});

function Signin() {
	const [err, setErr] = useState('');
	const { user, setUser } = useContext(StoreContext);

	const router = useRouter();

	const useStyles = makeStyles({
		root: {
			border: '1px solid gray',
			borderRadius: '13px',
			height: 58,
			marginBottom: '20px',
			'& .MuiInputLabel-animated': {
				color: 'var(--c-template)',
			},
			'&:focus-within': {
				border: '1px solid #fff',
			},
		},
	});
	const classes = useStyles();

	useEffect(() => {
		user ? router.push('/home') : null;
	}, [user]);

	return (
		<div className={styles.text}>
			<div className={styles.textContainer}>
				<LoginImg />
				<h3>Twitter'a giriş yap</h3>

				<Formik
					initialValues={{ email: '', password: '' }}
					validationSchema={validationScheme}
					onSubmit={(values) => {
						auth
							.signInWithEmailAndPassword(values.email, values.password)
							.then((res) => setUser(res))
							.catch((err) => setErr(err.message));
					}}
				>
					{({ errors, values, handleSubmit, handleChange, isSubmitting }) => (
						<form action="" onSubmit={handleSubmit}>
							<div className={styles.input}>
								<TextField
									className={cn(
										classes.root,
										styles.textField,
										values.email && styles.fill
									)}
									name="email"
									label="Telefon, e-posta veya kullanıcı adı"
									type="email"
									autoComplete="current-email"
									onChange={handleChange}
									helperText={errors.email}
								/>

								<TextField
									className={cn(
										classes.root,
										styles.textField,
										values.password && styles.fill
									)}
									name="password"
									label="Şifre"
									type="password"
									autoComplete="current-password"
									onChange={handleChange}
									helperText={errors.password}
								/>
							</div>
							<div>
								<Button
									className={styles.submitBtn}
									full
									big
									type="submit"
									disabled={isSubmitting}
								>
									Giriş Yap
								</Button>
								{err && <span className={styles.err}>{err}</span>}
							</div>
							<div className={styles.bottom}>
								<Button regular href="/resetPassword">
									Şifreni mi unuttun ?
								</Button>

								<Button regular href="/register">
									Twitter'a kaydol
								</Button>
							</div>
						</form>
					)}
				</Formik>
			</div>
		</div>
	);
}

export default Signin;
