const DEFAULT_COUNTRY_CODE = 'UN';
const DEFAULT_SEARCH_VALUE = '';
const DEFAULT_FILTER_CASE = 'confirmed';

const initialState = {
  lastUpdateCovidData: undefined,
  summaryCovidData: [],
  countryCode: DEFAULT_COUNTRY_CODE,
  searchValue: DEFAULT_SEARCH_VALUE,
  filterCase: DEFAULT_FILTER_CASE,
  isDataNew: false,
  isDataPer100: false,
  isLoading: false,
  hasError: false,
  notifications: [],
};

export default initialState;
