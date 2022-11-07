import { listaDeProjetos } from 'data/portifolio';
import NotFound from 'Pages/NotFound';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './Estudo.module.scss';

export default function Estudo() {
	const { id } = useParams();
	const navigate = useNavigate();
	const estudo = listaDeProjetos.find(projeto => projeto.id === Number(id));
	if (!estudo) {
		return <NotFound />;
	}

	return (
		<section className={styles.estudo}>
			<button className={styles.estudo__voltar} onClick={() => navigate('/projetos')}>{'< Voltar'}</button>
			<div className={styles.estudo__container}>

				<img className={styles.estudo__imagem} src={estudo?.imagem} alt={estudo?.resumo} />

				<article className={styles.estudo__caixa}>
					<h2 className={styles.estudo__titulo}>{estudo?.nome}</h2>
					<h3 className={styles.estudo__categoria}>{estudo?.categoria}</h3>
					<p className={styles.estudo__descricao}>{estudo?.descricao}</p>
				</article>

				<article className={styles.estudo__caixaLink}>
					<h3 className={styles.estudo__visita}>Visite ainda:</h3>
					<div className={styles.estudo__links}>
						<a className={styles.estudo__site} href={estudo?.link}>Site</a>
						<a className={styles.estudo__codigo} href={estudo?.codigo}>Código</a>
					</div>
				</article>
			</div>

		</section>
	);
}