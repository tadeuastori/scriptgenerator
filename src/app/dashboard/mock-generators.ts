import { Generator } from '../generator';

const pathImg = "./assets/img/";
const pathLogo = "./assets/logo/";
var countId = 0;

export const GENERATORS: Generator[] = [
  // { id: ++countId, name: 'Dashboard', link: '/dashboard', img: pathImg + 'imgDashboard.png', version:'v1.0', modifydate: new Date("2019-08-25T00:00:00.000Z") },
  { id: ++countId, name: 'Parameter', link: '/parameter', img: pathImg + 'imgParameter.png', version:'v1.0', modifydate: new Date("2019-08-25T00:00:00.000Z") },
  { id: ++countId, name: 'Constant', link: '/constant', img: pathImg + 'imgConstant.png', version:'v1.1', modifydate: new Date("2019-08-26T00:00:00.000Z") },
  { id: ++countId, name: 'Translator Key', link: '/translator', img: pathImg + 'imgTranslator.png', version:'v1.0', modifydate: new Date("2019-08-25T00:00:00.000Z") },
  { id: ++countId, name: 'Page', link: '/page', img: pathImg + 'imgPage.png', version:'v1.0', modifydate: new Date("2019-08-27T00:00:00.000Z") }
];

// export const TECHNOLOGIES: Technology [] = [
//   { id: ++countId, name: 'HTML5', img: pathLogo + 'html5.png' },
//   { id: ++countId, name: 'CSS', img: pathLogo + 'css.png' },
//   { id: ++countId, name: 'GitHub', img: pathLogo + 'github.png' },
//   { id: ++countId, name: 'Bootstrap', img: pathLogo + 'bootstrap.png' },
//   { id: ++countId, name: 'Angular', img: pathLogo + 'angular.png' },
// ] ;