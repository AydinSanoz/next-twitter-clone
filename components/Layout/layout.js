import React, { useContext } from 'react';

import useWindowSize from '../../hooks/useWindowSize';
import styles from './layout.module.css';
import CONSTANT from '../../constants/constants';

import Sidebar from './colSidebar';
import Main from './colMain';
import Extra from './colExtra';
import TweetModal from '../Modal/tweetModal';
import StoreContext from '../../store/store';

function Layout({ children, title, ...props }) {
	const { showModal, onModalToggle } = useContext(StoreContext);
	const size = useWindowSize();
	return (
		<div className={styles.layout}>
			<Sidebar flat={size.width < CONSTANT.DESKTOP}></Sidebar>
			<Main>
				<TweetModal isOpen={showModal} onRequestClose={onModalToggle} />
				{children}
			</Main>
			{size.width > CONSTANT.TABLET && <Extra>Extra</Extra>}
		</div>
	);
}

export default Layout;
