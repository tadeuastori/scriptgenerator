import { Generator } from '../generator';
import { Technology } from '../generator';

const pathImg = "./assets/img/";
const pathLogo = "./assets/logo/";
var countId = 0;

export const GENERATORS: Generator[] = [
  // { id: ++countId, name: 'Dashboard', link: '/dashboard', img: pathImg + 'imgDashboard.png' },
  { id: ++countId, name: 'Parameter', link: '/parameter', img: pathImg + 'imgParameter.png' },
  { id: ++countId, name: 'Constant', link: '/constant', img: pathImg + 'imgConstant.png' },
  { id: ++countId, name: 'Translator Key', link: '/translator', img: pathImg + 'imgTranslator.png' },
  { id: ++countId, name: 'Page', link: '/page', img: pathImg + 'imgPage.png' },
  { id: ++countId, name: 'Create Cube', link: '/newcube', img: pathImg + 'imgCubeNew.png' },
  { id: ++countId, name: 'Edit Cube', link: '/editcube', img: pathImg + 'imgCubeEdit.png' }
];

export const TECHNOLOGIES: Technology [] = [
  { id: ++countId, name: 'HTML5', img: pathLogo + 'html5.png' },
  { id: ++countId, name: 'CSS', img: pathLogo + 'css.png' },
  { id: ++countId, name: 'GitHub', img: pathLogo + 'github.png' },
  { id: ++countId, name: 'Bootstrap', img: pathLogo + 'bootstrap.png' },
  { id: ++countId, name: 'Angular', img: pathLogo + 'angular.png' },
] ;