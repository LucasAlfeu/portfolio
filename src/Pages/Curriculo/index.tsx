import React from 'react';
import styles from './Curriculo.module.scss';
import { ReactComponent as Construcao } from 'assets/contrucao.svg';

export default function Curriculo() {
	return (
		<section className={styles.curriculo}>
			<h2  className={styles.curriculo__titulo}>Curriculo</h2>
			<p  className={styles.curriculo__texto}> Em desenvolvimento </p>
			<Construcao  className={styles.curriculo__imagem} />
			<p className={styles.curriculo__texto2}>
				Essa parte do meu portifólio eu ainda estou projetando ao certo como eu quero fazer. 
				Entretanto caso queira baixar meu currículo <a href='https://drive.google.com/file/d/1yBehQ-WuSOHs9TxzRjFyjVFK9pHiDbss/view?usp=sharing' className={styles.curriculo__link} target='_blank' rel="noreferrer" download={'lucas-curriclun'}>clique aqui</a> .
			</p>
			
		</section>
	);
}