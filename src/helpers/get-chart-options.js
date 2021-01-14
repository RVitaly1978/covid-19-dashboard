import { getColorByFilterCase, getFilteredValue } from './index';

const getChartOptions = (base, { filterCase, isDataNew, isDataPer100 }) => {
  if (!base.data) {
    return {};
  }

  const color = getColorByFilterCase(filterCase);
  const chartLabels = base.data.map((item) => new Date(item.date));
  const chartDataset = base.data
  .map((item) => getFilteredValue(item, base.population, filterCase, isDataNew, isDataPer100));

  return {
    labels: [...chartLabels],
    data: [...chartDataset],
    label: filterCase,
    color,
  };
}

export default getChartOptions;
