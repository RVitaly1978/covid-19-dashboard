import { getRangeColorByFilterCase, getColorByFilterCase } from './index';

const getMapData = (summaryCovidData, ranges, filterCase) => {
  return summaryCovidData.map((obj) => {
    return {
      ...obj,
      rangeColor: getRangeColorByFilterCase(filterCase, obj.value, ranges),
      color: getColorByFilterCase(filterCase),
    };
  });
}

export default getMapData;
