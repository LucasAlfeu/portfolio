import React from 'react';
import styles from './NotFound.module.scss';
import { ReactComponent as Notfound} from 'assets/notFound.svg';

export default function NotFound() {
	return (
		<section className={styles.notFound}>
			<Notfound className={styles.notFound__imagem} />
			<p className={styles.notFound__texto}>Página não encontrada</p>
		</section>
	);
}