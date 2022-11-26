import React from 'react';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
	return (
		<header className={styles.cabecalho}>
			<h1 className={styles.cabecalho__titulo}>PORTFOLIO</h1>
			<ul className={styles.cabecalho__lista}>
				<li><Link to={'/'} className={styles.cabecalho__itemPrimeiro}>Inicio</Link></li>
				<li><Link to={'/projetos'} className={styles.cabecalho__item}>Projetos</Link></li>
				<li><Link to={'/sobre'} className={styles.cabecalho__item}>Sobre</Link></li>
				<li><Link to={'/curriculo'} className={styles.cabecalho__item}>Currículo</Link></li>
			</ul>
		</header>
	);
}