import React, { useContext } from 'react';
import Avatar from '../ProfileBox/avatar';
import Button from '../Buttons/button';
import styles from './profileCard.module.css';
import TextBold from '../Typography/textBold';
import Calender from '../../components/Icons/Calender';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { FooterMenu } from '../../constants/constants';
import StoreContext from '../../store/store';

function ProfileCard({
	avatar,
	name,
	slug,
	datetime,
	className,
	children,
	...props
}) {
	const router = useRouter();
	const { user, setUser } = useContext(StoreContext);
	const path = router.pathname;
	console.log(router.pathname);

	return (
		<div className="container">
			<TextBold>{user?.displayName}</TextBold>

			<div className={styles.header}>
				<div className={styles.background}></div>
				<Avatar className={styles.avatar} />
			</div>

			<div className={styles.body}>
				<Button className={styles.button} full>
					Edit Profile
				</Button>

				<div className={styles.username}>
					<TextBold bold>{user?.displayName}</TextBold>
					<TextBold gray small>
						@{user?.email?.split('@')[0]}
					</TextBold>
				</div>

				<div className={styles.userdate}>
					<Calender color="var(--c-text-secondary)" />
					<TextBold gray small>
						joined March 2021
					</TextBold>
				</div>
				<div className={styles.followers}>
					<Button regular href={`${path}/following`}>
						<span>10</span>
						<TextBold small gray>
							following
						</TextBold>
					</Button>
					<Button regular href={`${path}/followers`}>
						<span>8</span>
						<TextBold small gray>
							followers
						</TextBold>
					</Button>
				</div>
			</div>
			<footer className={styles.footer}>
				{FooterMenu.map((menu) => {
					return (
						<Button
							key={menu.key}
							regular
							className={cn(
								styles.footerBtn,
								path === `/profile${menu.path}` && styles.selectedfooterBtn
							)}
							href={`${path}/${menu.path}`}
						>
							{console.log('path', path)}
							{console.log('menu', menu.path)}
							<TextBold gray small>
								{menu.name}
							</TextBold>
						</Button>
					);
				})}
			</footer>
		</div>
	);
}

export default ProfileCard;
