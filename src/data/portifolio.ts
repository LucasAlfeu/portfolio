export const listaDeProjetos = [
	{
		nome: 'Sunnyside',
		descricao: 'Um projeto de landing page usando o HTML e CSS, tive a oprtunidade de usar o CSS Grid para auxiliar na disposição de alguns elementos e também Media Query para ajustar a responsividade para que possa ser aberto em qualquer dispositivo, utilizei para a construção a modalidade de mobile first, foi o começo de uma longa jornada também da utilização do JavaScript, utilizei a manipulação do DOM para alternar em tema escuro e claro e para dispositivos mobile um menu.',
		resumo: 'Landing page utilizando HTML, CSS e JavaScript.',
		link: 'https://sunnyside-ifr6rjcju-lucasalfeu.vercel.app/#',
		imagem: '/portifolioImagem/sunnyside.png',
		id: 0,
		categoria: 'JavaScript',
		codigo: 'https://github.com/LucasAlfeu/Sunnyside',
		busca: 'sunnyside'
	},
	{
		nome: 'WorkPlin',
		descricao: 'Meu primeiro projeto de estudo em Front-End. Foi construído apenas com HTML e CSS puro, e pude utilizar Media Query para construir a responsividade e também o position para posicionar alguns elementos',
		resumo: 'Landing page utiizando apenas HTML e CSS para sua construção.',
		link: 'https://workplin.vercel.app/',
		imagem: '/portifolioImagem/workplin.png',
		id: 1,
		categoria: 'HTML',
		codigo: 'https://github.com/LucasAlfeu/Workplin',
		busca: 'workplin'
	},
	{
		nome: 'Clima',
		descricao: 'Site de previsão do tempo contruido com React e utilizando o TypeScript, as requisições foram feitas utilizando a Lib do Axios e a API da Open Weather Map para conseguir todas as informações necessarias sobre o clima. Pude colocar em prática também meus conhecimentos com o React Router DOM para as mudanças de página dentro do site.',
		resumo: 'Estudo visando a criação de página usando o React com TypeScript e também requisições API de previsão do tempo.',
		link: 'https://clima-eta.vercel.app/',
		imagem: '/portifolioImagem/clima.png',
		id: 2,
		categoria: 'React',
		codigo: 'https://github.com/LucasAlfeu/Clima',
		busca: 'clima'
	},
	{
		nome: 'Hortifruto',
		descricao: 'Meu primeiro projeto de React do Typescript, aproveitei para exercitar o uso de algumas bibliotecas como o React-Card. Projeto simples de um hortifrute em que vc seleciona qual fruta e a quantidade que deseja mostrando tudo numa lista contendo além dos itens o valor final e ao finalizar o pedido toda essa mesma lista é copiada para a área de tranferência para enviar ao comerciante.',
		resumo: 'Projeto de React, visando a facilidade de compras online com uma lista a ser enviada para o comerciante',
		link: 'https://hortifruto.vercel.app/',
		imagem: '/portifolioImagem/hortifruto.png',
		id: 3,
		categoria: 'React',
		codigo: 'https://github.com/LucasAlfeu/Hortifruto',
		busca: 'hortifruto'
	},
	{
		nome: 'Senakers',
		descricao: 'Um projeto visado o estduo de JavaScript para a manipulaçao de DOM, é possível ver o mesmo produto em diferentes ângulos, e também a funcionalidade do carrinho com o número de itens que se deseja adquirir.',
		resumo: 'Projeto de JavaScript para um e-comerce de venda tenis.',
		link: 'https://senakers.vercel.app/',
		imagem: '/portifolioImagem/sneakers.png',
		id: 4,
		categoria: 'JavaScript',
		codigo: 'https://github.com/LucasAlfeu/Senakers',
		busca: 'senakers'
	},
	{
		nome: 'Turismo Espacial',
		descricao: 'Projeto em HTML, CSS e JavaScript visando a manipulação do DOM através de simples cliques. Ele passa por alguns elementos do nosso sistema solar, e também fala de algumas pessoas que fazem parte de equipes preparadas para essas atividades fora da Terra. Tentei unir duas paixões que eu o espaço e a programação em um projeto só.',
		resumo: 'Um estudo de JavaScript que mostra alguns elementos do espaço',
		link: 'https://turismo-espacial.vercel.app/',
		imagem: '/portifolioImagem/turismo-espacial.png',
		id: 5,
		categoria: 'JavaScript',
		codigo: 'https://github.com/LucasAlfeu/Turismo-Espacial',
		busca: 'turismo espacial'
	},
	{
		nome: 'Selfcare',
		descricao: 'Projeto em HTML e CSS puro visando o estudo do css Grid para disposição dos elementos',
		resumo: 'Projeto de e-comerce de produtos naturais em HTML e CSS puro.',
		link: 'https://selfcare-mu.vercel.app/',
		imagem: '/portifolioImagem/salfscare.png',
		id: 6,
		categoria: 'HTML',
		codigo: 'https://github.com/LucasAlfeu/Selfcare',
		busca: 'selfcare'
	},
	{
		nome: 'Loopstudio',
		descricao: 'Um projeto de estudo visando a arquitetura de um site em HTML e CSS puros.',
		resumo: 'Site sobre venda de equipamentos de realidade virtual',
		link: 'https://loopstudio-2.vercel.app/',
		imagem: '/portifolioImagem/loopstudio.png',
		id: 7,
		categoria: 'HTML',
		codigo: 'https://github.com/LucasAlfeu/Loopstudio',
		busca: 'loopstudio'
	},
	{
		nome: 'Casa Verde',
		descricao: 'Projeto final da formação de React com TypeScript. Coloquei em prática todos meus conhecimentos adquiridos na formação. Um site para vendas de plantas com ordenamente da lista de produtos e também uma assinatura de um NewsLetter.',
		resumo: 'Challenge do curso de dormação React com TypeScript.',
		link: 'https://casa-verde-lilac.vercel.app/',
		imagem: '/portifolioImagem/casaVerde.png',
		id: 8,
		categoria: 'Challenge',
		codigo: 'https://github.com/LucasAlfeu/casa-verde',
		busca: 'casa verde'
	},
	{
		nome: 'Adopet',
		descricao: 'O estudo é sobre um site de adoção de pets facilitando o contato entre quem deseja adotar um pet quem tem algum para adoção. Assim que entrar pela primeira vai ser necessário fazer um cadastro, infelizmente não consegui fazer o deploy da minha api para esse projeto ainda para salvar os dados ainda, entretanto estou salvando localmente os dados por enquanto até eu conseguir colocar minha api no ar. A verificação do nome, email, e senha são feitos com RegEx, a mudança de rotas foi feita utilizando o React Router Dom, atualmente possui 6 rotas, deixarei todas listadas logo abaixo para serem acessadas, na renderização da lista de pets para adoção na página home e também na verificação para ver se os dados cadastrados na tela de login batem eu utilizei o Recoil para gerenciamento do estado e também foi feita a adaptação do site para diferentes telas com layout responsivo utilizando a metodologia do "mobile first".O projeto foi feito utilizando React com TypeScript e foi de um Challange da Alura.',
		resumo: 'O estudo é sobre um site de adoção de pets.',
		link: 'https://adopet-six.vercel.app/',
		imagem: '/portifolioImagem/adopet.png',
		id: 9,
		categoria: 'Challenge',
		codigo: 'https://github.com/LucasAlfeu/Adopet',
		busca: 'adopet'
	}
];