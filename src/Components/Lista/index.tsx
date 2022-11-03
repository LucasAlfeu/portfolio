import React, { useState } from 'react';
import { listaDeProjetos } from 'data/portifolio';
import { Link } from 'react-router-dom';
import styles from './Lista.module.scss';

export default function Lista() {
	const [projetos, setProjetos] = useState(listaDeProjetos);
	return (
		<ul className={styles.lista}>
			{projetos.map(projeto =>
				<li
					className={styles.lista__item}
					key={projeto.id}
				>
					<h3 className={styles.lista__titulo}>{projeto.nome}</h3>
					<img
						className={styles.lista__imagem}
						src={projeto.imagem}
						alt={projeto.nome}
					/>
					<p className={styles.lista__resumo}>{projeto.resumo}</p>
					<p className={styles.lista__categoria}>{projeto.categoria}</p>
					<Link to={'#'} className={styles.lista__link}>Saiba Mais</Link>
				</li>
			)}
		</ul>
	);
}