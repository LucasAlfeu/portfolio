import styles from './Filtros.module.scss';
import React from 'react';

interface IFiltro {
	filtrarLista: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export default function Filtros({ filtrarLista }: IFiltro) {
	return (
		<div className={styles.filtro}>
			<p className={styles.filtro__texto}>Filtrar por:</p>
			<select className={styles.filtro__select} onChange={filtrarLista}>
				<option className={styles.filtro__option} value="semFiltro">Sem Filtro</option>
				<option className={styles.filtro__option} value="HTML">HTML</option>
				<option className={styles.filtro__option} value="JavaScript">JavaScript</option>
				<option className={styles.filtro__option} value="React">React</option>
				<option className={styles.filtro__option} value="Challenge">Challenge</option>
			</select>
		</div>
	);
}