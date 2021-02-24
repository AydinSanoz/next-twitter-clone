import React from 'react';
import Button from '../components/button';
import MenuButton from '../components/menuButton';
import Nav from '../components/nav';
import { Home } from '../components/Icons';

export default {
	title: 'Buttons',
};

export const baseButton = () => <Button>Save</Button>;

export const menuButton = () => (
	<MenuButton>
		<Home /> <span>Home</span>
	</MenuButton>
);

export const nav = () => <Nav></Nav>;
