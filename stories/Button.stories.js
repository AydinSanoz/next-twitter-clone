import React from 'react';
import Button from '../components/button';
import MenuButton from '../components/menuButton';
import ThemeButton from '../components/themeButton';
import Nav from '../components/nav';
import { Home } from '../components/Icons';
import TitleBold from '../components/textBold';
import Stack from '../components/stack';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

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

export const nav = () => (
	<Nav flat={boolean('disabled', false)} selectedKey="Home"></Nav>
);
