import { Generator } from '../generator';

const pathImg = "./assets/img/";
var countId = 0;

export const GENERATORS: Generator[] = [
  { id: ++countId, name: 'Parameter', link: '/parameter', img: pathImg + 'imgParameter.png', version:'v1.0', modifydate: new Date("2019-08-25T00:00:00.000Z") },
  { id: ++countId, name: 'Constant', link: '/constant', img: pathImg + 'imgConstant.png', version:'v1.0', modifydate: new Date("2019-08-25T00:00:00.000Z") },
  { id: ++countId, name: 'Translator Key', link: '/translator', img: pathImg + 'imgTranslator.png', version:'v1.0', modifydate: new Date("2019-08-25T00:00:00.000Z") }
];

export enum CardColorType {
  primary,
  secondary,
  success,
  danger,
  info,
  // dark
}
