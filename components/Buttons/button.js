import React from 'react';
import Link from 'next/link';
import styles from './button.module.css';
import cn from 'classnames';

function BaseButton({ type = 'button', children, className, ...props }) {
	return (
		<button type={type} className={className} {...props}>
			{children}
		</button>
	);
}
function LinkButton({ children, className, ...props }) {
	return (
		<Link href={props.href}>
			<a className={className} {...props}>
				{children}
			</a>
		</Link>
	);
}

function Button({
	big = false,
	full = false,
	regular = false,
	children,
	className,
	...props
}) {
	const Comp = props.href ? LinkButton : BaseButton;
	return (
		<Comp
			className={cn(
				styles.button,
				full && styles.fullWidth,
				big && styles.big,
				regular && styles.regular,
				className
			)}
			{...props}
		>
			{children}
		</Comp>
	);
}

export default Button;
