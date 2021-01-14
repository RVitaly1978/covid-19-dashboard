import { GLOBAL_CAPITAL } from '../constants';
import globalFlag from '../img/un.svg';

import { getTotalPopulation } from './index';

const addPropertiesToGlobal = (base, target) => {
  return {
    ...target,
    flag: globalFlag,
    capital: GLOBAL_CAPITAL,
    population: getTotalPopulation(base),
  };
}

export default addPropertiesToGlobal;
