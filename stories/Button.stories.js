import React from 'react';
import Button from '../components/button';
import MenuButton from '../components/menuButton';
import Nav from '../components/nav';
import { Home } from '../components/Icons';
import TitleBold from '../components/titleBold';

export default {
	title: 'Buttons',
};

export const baseButton = () => <Button>Save</Button>;

export const menuButton = () => (
	<MenuButton>
		<Home /> <TitleBold>Home</TitleBold>
	</MenuButton>
);

export const nav = () => <Nav selectedKey="Home"></Nav>;
