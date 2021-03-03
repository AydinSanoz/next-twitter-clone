import React from 'react';
import Button from '../components/Sidebar/button';
import MenuButton from '../components/Sidebar/menuButton';
import ThemeButton from '../components/Sidebar/themeButton';
import Nav from '../components/Sidebar/nav';
import { Home } from '../components/Icons';
import TitleBold from '../components/Sidebar/textBold';
import Stack from '../components/Layout/stack';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
	title: 'Buttons',
	decorators: [withKnobs],
};

export const baseButton = () => <Button>Save</Button>;

export const menuButton = () => (
	<MenuButton>
		<Home />
		<TitleBold>Home</TitleBold>
	</MenuButton>
);

export const themeButton = () => {
	return (
		<Stack gab={40} column>
			<ThemeButton flat={boolean('flat', false)}>Tweet</ThemeButton>
			<ThemeButton flat={boolean('flat1', false)} full>
				Tweet
			</ThemeButton>
			<ThemeButton flat={boolean('flat2', false)} full big>
				{' '}
				Tweet
			</ThemeButton>
		</Stack>
	);
};

export const nav = () => <Nav>hello</Nav>;
