const initialState = {
  lastUpdateCovidData: undefined,
  summaryCovidData: [],
  listData: [],
  tableData: {},
  countryCode: 'UN',
  searchValue: '',
  filterCase: 'confirmed',
  isDataNew: false,
  isDataPer100: false,
  isLoading: false,
  hasError: false,
  notifications: [],
};

export default initialState;
