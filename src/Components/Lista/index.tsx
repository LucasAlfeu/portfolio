import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Lista.module.scss';
import { Projetos } from 'Types/Projetos';
import Filtros from './Filtros';
import { listaDeProjetos } from 'data/portifolio';

export default function Lista() {
	const [projetos, setProjetos] = useState(listaDeProjetos);
	const navigate = useNavigate();

	const redirecionamentoParaDetalhes = (estudo: Projetos) => {
		navigate(`/estudo/${estudo.id}`, { state: { estudo }, replace: true });
	};

	const filtrarLista = (e: React.ChangeEvent<HTMLSelectElement>) => {
		if (e.target.value === 'semFiltro') {
			const listaNaoFiltrada = listaDeProjetos;
			setProjetos([...listaNaoFiltrada]);
		} else {
			const listaFiltrada = listaDeProjetos.filter(projetos => projetos.categoria === e.target.value);
			setProjetos([...listaFiltrada]);
		}

	};

	return (
		<section>
			<Filtros filtrarLista={filtrarLista} />
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