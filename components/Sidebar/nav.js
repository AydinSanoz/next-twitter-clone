import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import styles from './nav.module.css';
import { Menu } from '../../constants/constants';

import MenuButton from './menuButton';
import TextBold from './textBold';

function Nav({ flat = false, className, ...props }) {
	const router = useRouter();
	return (
		<nav className={styles.nav} {...props}>
			{Menu.map((menu) => {
				const showTitle = !flat && menu.name.length > 0;
				const selected = router.pathname === menu.path;
				return (
					<MenuButton
						className={cn(styles.menuButton, menu.key)}
						key={menu.key}
						notify={menu.notify}
						href={menu.path}
						selected={selected}
					>
						{selected ? menu.selectedIcon : menu.icon}
						{showTitle && (
							<TextBold
								className={cn(styles.text, selected && styles.selectedText)}
								bold
							>
								{menu.name}
							</TextBold>
						)}
					</MenuButton>
				);
			})}
		</nav>
	);
}
export default Nav;
