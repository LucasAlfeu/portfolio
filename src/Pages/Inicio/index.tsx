import React from 'react';
import styles from './Inicio.module.scss';
import { ReactComponent as Foto } from 'assets/foto.svg';

export default function Inicio() {
	return (
		<div>
			<main className={styles.principal}>
				<p className={styles.principal__texto}>Olá, meu nome é Lucas. Sou <strong>desenvolvedor Front-End</strong> e decidi criar esse projeto para reunir em um só lugar todos os meus outros projetos de protfólio, além de mais algumas informações pessoais para contado, um pouco sobre mim e também meu currículo. Eu comecei a perceber que faltava organizar tudo num só lugar, principalmente meus projetos. Então seja bem vindo.</p>
				<Foto className={styles.principal__foto} />
				<p className={styles.principal__informacao}>Lucas Alfeu da Silva Oliveira - Volta Redonda, Rio de Janeiro</p>
			</main>
		</div>
	);
}