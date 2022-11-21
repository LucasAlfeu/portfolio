import React from 'react';
import styles from './SobreMin.module.scss';

export default function SobreMim() {
	const dataAtual = new Date;
	const anoAtual = dataAtual.getFullYear();
	const idade = anoAtual - 1999;
	return (
		<article className={styles.sobreMim}>
			<h2 className={styles.sobreMim__titulo}>Sobre Mim</h2>
			<p className={styles.sobreMim__paragrafo}>
				Como já mencionei antes, meu nome é Lucas e tenho {idade} anos, nascido no interior do Rio de Janeiro na cidade de Volta Redonda.
				No início do ano eu resolvi me inserir no mercado de tecnologia como desenvolvedor Front-End estudando na Alura, local onde adquiri
				todos meu conhecimentos nessa área de programação. Resolvi me envolver em programação após uma reprovação na prova do Corpo de Bombeiro
				do Rj por descobrir que sou portador de Daltonismo, descobri na inpeção de saúde do concurso apoós ter passado por todas as etapas.
				No inicio de Abril de 2022 comecei a me aventurar nesse mundo vasto.
			</p>
			<p className={styles.sobreMim__paragrafo}>
				Iniciei meus estudos em HTML e CSS faznedo algumas LandingPages construídas com os instrutores da Alura, também pude praticar bastante com
				alguns exemplos encontrados pela internet. Logo em seguida estudei os fundamentos da Lógida de Progamação, utilizei o JavaScript como linguagem básica.
			</p>
			<p className={styles.sobreMim__paragrafo}>
				Como essa linguagem é a usada para o Front-End eu inicei meus estudos no vasto mundo do JavaScript. Consegui contruir um fundamento sólido na linguagem com
				conceitos de arrow function, requisições api, métodos de array, objetos, manipulação de DOM e etc. Dei uma estudada também em TypeScript por motivo da
				tipagem da linguagem, caracteristica que deixa a desejar no JavaScript.
			</p>
			<p className={styles.sobreMim__paragrafo}>
				Como objetivo final, pois sei que ainda tem muitos tópicos para estudar ainda, nessa área comecei a estudar o framework React com TypeScript, sempre me
				falavam que era de suma importância estudar um então me aprofundei ao máximo que consegui foquei nas famosas function components, props, react router dom, hooks, axios e etc.
			</p>
			<p className={styles.sobreMim__paragrafo}>
				Fora dos meus estudos eu já fui voluntário em um Projeto Social da Igreja que faço parte, não tenho nenhuma experiêcia profissional ainda por me dediquei a vertibulares militares,
				mas sempre fui muito comprometido e dedicado com minhas obrigações. Nos meus momentos de lazer gosto praticar alguns hobbies e também praticar execícios físicos.
			</p>
			<div className={styles.sobreMim__div}>
				<h3 className={styles.sobreMim__contatoTexto}>Para contato</h3> 
				<ul className={styles.sobreMim__lista}>
					<li className={styles.sobreMim__contato}><a href="https://www.linkedin.com/in/lucas-alfeu-08b525235/" className={styles.sobreMim__linkeding}>Linkeding</a></li>
					<li className={styles.sobreMim__contato}>Email: a1feu@outlook.com</li>
				</ul>
			</div>
		</article>
	);
}