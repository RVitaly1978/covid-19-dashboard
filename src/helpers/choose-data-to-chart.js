import { GLOBAL_SLUG } from '../constants';

const chooseDataToChart = (state, slug) => {
  const { historicalCovidData, historicalGlobalCovidData } = state;

  const filtered = historicalCovidData.find(obj => obj.slug === slug);

  if (slug === GLOBAL_SLUG) {
    return { ...historicalGlobalCovidData };
  }

  if (!filtered) {
    return {};
  }

  return { ...filtered };
}

export default chooseDataToChart;
