import { cases } from '../constants';

const getColorByFilterCase = (filterCase) => {
  return cases.find(({ itemCase }) => itemCase === filterCase).color;
}

export default getColorByFilterCase;
