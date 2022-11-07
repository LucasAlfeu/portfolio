import React, { useState } from 'react';
import { listaDeProjetos } from 'data/portifolio';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Lista.module.scss';
import { Projetos } from 'Types/Projetos';

export default function Lista() {
	const [projetos, setProjetos] = useState(listaDeProjetos);
	const navigate = useNavigate();

	const redirecionamentoParaDetalhes = (estudo: Projetos) => {
		navigate(`/estudo/${estudo.id}`, { state: { estudo }, replace: true });
	};

	return (
		<section>
			<div className={styles.filtro}>
				<p className={styles.filtro__texto}>Filtrar por:</p>
				<select className={styles.filtro__select}>
					<option
						className={styles.filtro__option}
						onClick={e => console.log(e.target)}
						value="semFiltro"
					>
						Sem Filtro
					</option>
					<option
						className={styles.filtro__option}
						value="html"
					>HTML
					</option>
					<option
						className={styles.filtro__option}
						value="javascript"
					>
						JavaScript
					</option>
					<option
						className={styles.filtro__option}
						value="typescript"
					>
						TypeScript
					</option>
					<option
						className={styles.filtro__option}
						value="react"
					>
						React
					</option>
				</select>
			</div>
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
						<button onClick={() => redirecionamentoParaDetalhes(projeto)} className={styles.lista__link}>Saiba Mais</button>
					</li>
				)}
			</ul>
		</section>
	);
}