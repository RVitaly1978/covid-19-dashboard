import { GLOBAL_SLUG } from '../constants';

const getIsRequest = (state, slug) => {
  const { historicalCovidData } = state;

  const filtered = historicalCovidData.find(obj => obj.slug === slug);

  if (filtered || slug === GLOBAL_SLUG) {
    return false;
  }

  return true;
}

export default getIsRequest;
