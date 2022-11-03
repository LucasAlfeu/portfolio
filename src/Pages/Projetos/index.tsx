import React, { useState } from 'react';
import Lista from 'Components/Lista';
import styles from './Projetos.module.scss';

export default function Projetos() {
	return (
		<section className={styles.projetos}>
			<h2 className={styles.projetos__titulo}>Projetos</h2>
			<p  className={styles.projetos__texto}>
				Esses são meus projetos de estudos, todos eles feitos com os conhecimentos adquiridos pela escola de tecnologia Alura.
				Nessa área tem todos os meus conhecimentos até então de Front-End, começando desde meu inicio com uma simples landing page totalmente estática
				até projetos envolvendo o framework React.
			</p>
			<Lista />
		</section>
	);
}