import { GLOBAL_SLUG } from '../constants';

const getIsRequest = (state, slug) => {
  const { historicalCovidData } = state;

  const filtered = historicalCovidData.filter(obj => obj.slug === slug)[0];

  if (filtered || slug === GLOBAL_SLUG) {
    return false;
  }

  return true;
}

export default getIsRequest;
