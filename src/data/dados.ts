import UserImg from '../assets/images/usuario.png';

//stories
import ArautosDoEvangelhoImg from '../assets/images/stories/arautos_do_evangelho.jpg';
import InstitutoSaoRobertoImg from '../assets/images/stories/instituto_sao_roberto.jpg';
import RocketseatImg from '../assets/images/stories/rocketseat.jpg';
import ReactImg from '../assets/images/stories/react.jpg';
import PedroAugustoImg from '../assets/images/stories/pedro_augusto.jpg';
import VitorManoelPerfilImg from '../assets/images/stories/vitor_manoel.jpg';
import JoaoFujiiPerfilImg from '../assets/images/stories/joao_fujii.jpg';

//sugestoes para seguir
import LucasMontanoPerfilImg from '../assets/images/sugestoes-para-seguir/lucasmontano.jpg';
import FabioSalgadoPerfilImg from '../assets/images/sugestoes-para-seguir/fabiosalgado.jpg';
import FabioAkitaPerfilImg from '../assets/images/sugestoes-para-seguir/fabioakita.jpg';
import TiagoNogueiraPerfilImg from '../assets/images/sugestoes-para-seguir/tiago_nogueira.jpg';
import MiguelSorianiPerfilImg from '../assets/images/sugestoes-para-seguir/miguelsoriani.jpg';
import PadreLeonardoPerfilImg from '../assets/images/sugestoes-para-seguir/padreleonardo.jpg';
import RafaelBrodbeckImg from '../assets/images/sugestoes-para-seguir/rafael_brodbeck.jpg';

//imagens perfis
import CarlosMeloImg from '../assets/images/posts/carlos_melo.jpg';
//posts
import Post1CarlosMeloImg from '../assets/images/posts/carlos_melo_post_1.png';
import Post1PedroAugustoImg from '../assets/images/posts/pedro_augusto_post_1.png';
import Post1InstitutoSaoRobertoImg from '../assets/images/posts/instituto_sao_roberto_post_1.png';

export const dadosUsuario = {
  userName: "Kauan C. Rigoleto Fernandes",
  nameAccount: "kauancarlosrf",
  userImg: UserImg,
}

export const listaStories = [
  {
    imgPerfil: ArautosDoEvangelhoImg,
    nameAccount: 'arautosmaringa',
  },
  {
    imgPerfil: PedroAugustoImg,
    nameAccount: 'pedroaugusto_ps',
  },
  {
    imgPerfil: RocketseatImg,
    nameAccount: 'rocketseat',
  },
  {
    imgPerfil: ReactImg,
    nameAccount: 'reactjs.br',
  },
  {
    imgPerfil: InstitutoSaoRobertoImg,
    nameAccount: 'inst.saoroberto',
  },
];

export const sugestoesParaSeguir = [
  {
    userName: "Dr. Rafael Vitola Brodbeck",
    imgPerfil: RafaelBrodbeckImg,
    nameAccount: 'rafaelbrodbeck',
  },
  {
    userName: "Pe. Leonardo Wagner",
    imgPerfil: PadreLeonardoPerfilImg,
    nameAccount: 'padreleonardowagner',
  },
  {
    userName: "Miguel Soriani",
    imgPerfil: MiguelSorianiPerfilImg,
    nameAccount: 'omiguelsoriani',
  },
  {
    userName: "Tiago Nogueira | GMN",
    imgPerfil: TiagoNogueiraPerfilImg,
    nameAccount: 'otiago.nogueira',
  },
  {
    userName: "Lucas Montano",
    imgPerfil: LucasMontanoPerfilImg,
    nameAccount: 'lucasmontano',
  },
];

export const dadosPosts = [
  {
    id: 0,
    nameAccount: 'carlos_melo.py',
    imgPerfil: CarlosMeloImg,
    imgPost: Post1CarlosMeloImg,
    quantidadeCurtidas: 56,
    quantidadeComentarios: 89,
    tempoAtras: '15 MINUTOS',
    descricao: 'Para Elon Musk, o seu background educacional é irrelevante; passar no “coding test” é o que importa. Python é a primeira linguagem usada na Tesla, por causa da sua velocidade nas etapas de validação e prototipação. "Stay hungry, Learn Python."'
  },
  {
    id: 1,
    nameAccount: 'pedroaugusto_ps',
    imgPerfil: PedroAugustoImg,
    imgPost: Post1PedroAugustoImg,
    quantidadeCurtidas: 143,
    quantidadeComentarios: 72,
    tempoAtras: '1 DIA',
    descricao: 'Alô, Minas Gerais! A terceira edição do Farol21 vem aí. 19 e 20 de agosto, em Belo Horizonte/MG. Não fique de fora. O link está na bio.'
  },
  {
    id: 2,
    nameAccount: 'inst.saoroberto',
    imgPerfil: InstitutoSaoRobertoImg,
    imgPost: Post1InstitutoSaoRobertoImg,
    quantidadeCurtidas: 56,
    quantidadeComentarios: 71,
    tempoAtras: '15 MINUTOS',
    descricao: 'Revelado o tema de nossa nova jornada: A Gramática Normativa! Um assunto extremamente rico, que, por vezes, acaba sendo deixado de lado… Mas não se engane: este tema é de grandíssima importância na sua vida, e você perceberá isso desde a primeira aula. Fique atento, pois amanhã postaremos o tema da primeira aula, que ocorrerá nesta quinta-feira. Algum palpite de qual seja? Conte-nos nos comentários. Envie este post a um amigo para acompanhar toda a jornada com você!'
  },
];

export const listaDirects = [
  {
    imgPerfil: LucasMontanoPerfilImg,
    nameAccount: 'lucasmontano',
    userName: 'Lucas Montano',
    ultimaVezOnline: '15 h'
  },
  {
    imgPerfil: ArautosDoEvangelhoImg,
    nameAccount: 'arautosmaringa',
    userName: 'Arautos Maringá',
    ultimaVezOnline: '13 h'
  },
  {
    imgPerfil: PedroAugustoImg,
    nameAccount: 'pedroaugusto_ps',
    userName: 'Pedro Augusto',
    ultimaVezOnline: '5 sem'
  },
  {
    imgPerfil: MiguelSorianiPerfilImg,
    nameAccount: 'omiguelsoriani',
    userName: 'Miguel Soriani',
    ultimaVezOnline: '15 min'
  },
  {
    imgPerfil: PadreLeonardoPerfilImg,
    nameAccount: 'padreleonardowagner',
    userName: "Pe. Leonardo Wagner",
    ultimaVezOnline: '2 d'
  },
  {
    imgPerfil: VitorManoelPerfilImg,
    nameAccount: 'vitormanoelh',
    userName: 'Vitor Manoel',
    ultimaVezOnline: '15 min'
  },
  {
    imgPerfil: InstitutoSaoRobertoImg,
    nameAccount: 'inst.saoroberto',
    userName: 'Instituto São Roberto Belarmino',
    ultimaVezOnline: '47 min'
  },
  {
    imgPerfil: JoaoFujiiPerfilImg,
    nameAccount: 'joao_fujii',
    userName: 'joao arthur',
    ultimaVezOnline: '1 d'
  },
  {
    imgPerfil: FabioSalgadoPerfilImg,
    nameAccount: 'fabiosaldecarvalho',
    userName: 'Fábio Salgado de Carvalho',
    ultimaVezOnline: '13 sem'
  },
  {
    imgPerfil: FabioAkitaPerfilImg,
    nameAccount: 'akitaonrails',
    userName: 'Fabio Makoto Akita',
    ultimaVezOnline: '19 h'
  },
];
