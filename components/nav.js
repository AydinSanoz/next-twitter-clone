import React from 'react';
import cn from 'classnames';

import styles from './nav.module.css';
import { Menu } from '../constants/constants';

import MenuButton from './menuButton';
import TextBold from './textBold';

function Nav({ flat = false, className, selectedKey = 'Home', ...props }) {
	return (
		<nav className={cn(styles.nav, className)} {...props}>
			{Menu.map((menu) => {
				const showTitle = !flat && menu.name.length > 0;
				return (
					<MenuButton
						key={menu.key}
						notify={menu.notify}
						selected={selectedKey === menu.name}
						href={menu.path}
					>
						{selectedKey === menu.name ? menu.selectedIcon : menu.icon}
						{showTitle && (
							<TextBold className={styles.text} bold>
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
