import { cases } from '../constants';

const getColorByFilterCase = (filterCase) => {
  return cases.find((item) => item.case === filterCase).color;
}

export default getColorByFilterCase;
