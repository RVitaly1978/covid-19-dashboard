import { GLOBAL_SLUG } from '../constants';

const chooseDataToChart = (state, slug) => {
  const { historicalCovidData, historicalGlobalCovidData } = state;

  const filtered = historicalCovidData.filter(obj => obj.slug === slug)[0];

  if (slug === GLOBAL_SLUG) {
    return { ...historicalGlobalCovidData };
  }

  if (filtered) {
    return { ...filtered };
  }

  return {};
}

export default chooseDataToChart;
