import { cases } from '../constants';

const getColorByFilterCase = (filterCase) => {
  return cases.filter((item) => item.case === filterCase)[0].color;
}

export default getColorByFilterCase;
