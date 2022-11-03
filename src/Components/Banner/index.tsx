import Menu from 'Components/Menu';
import React from 'react';
import styles from './Banner.module.scss';
import { ReactComponent as HTML } from 'assets/html.svg';
import { Outlet } from 'react-router-dom';

export default function Banner() {
	return (
		<div className={styles.banner}>
			<Menu />
			<div className={styles.container}>
				<div className={styles.container__textos}>
					<h2 className={styles.container__nome}>LUCAS ALFEU</h2>
					<p className={styles.container__dev}>Desenvolvedor Front-End</p>
				</div>
				<HTML />
			</div>
		</div>
	);
}