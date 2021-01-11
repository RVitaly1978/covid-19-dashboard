import {
  GLOBAL_COUNTRY_CODE,
  DEFAULT_SEARCH_VALUE,
  DEFAULT_FILTER_CASE,
} from '../constants';

const initialState = {
  lastUpdateCovidData: undefined,
  summaryCovidData: [],
  countryCode: GLOBAL_COUNTRY_CODE,
  searchValue: DEFAULT_SEARCH_VALUE,
  filterCase: DEFAULT_FILTER_CASE,
  isDataNew: false,
  isDataPer100: false,
  isLoading: false,
  hasError: false,
  notifications: [],
};

export default initialState;
