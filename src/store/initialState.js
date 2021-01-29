import {
  GLOBAL_COUNTRY_CODE,
  DEFAULT_SEARCH_VALUE,
  DEFAULT_FILTER_CASE,
  DEFAULT_SORT_BY,
  DEFAULT_SORT_ORDER,
} from '../constants';

const initialState = {
  summaryCovidData: [],
  summaryGlobalCovidData: {},
  historicalCovidData: [],
  historicalGlobalCovidData: {},
  countriesData: [],

  countryCode: GLOBAL_COUNTRY_CODE,
  searchValue: DEFAULT_SEARCH_VALUE,
  filterCase: DEFAULT_FILTER_CASE,
  sortBy: DEFAULT_SORT_BY,
  sortOrder: DEFAULT_SORT_ORDER,

  isDataNew: false,
  isDataPer100: false,

  isLoading: true,
  isUpdateLoading: false,
  isChartLoading: false,

  isFullScreen: false,

  hasError: false,
  hasChartError: false,
  notifications: [],
};

export default initialState;
