import initialState from './initialState';

import {
  filterCountries,
  addPropertiesToSummaryData,
  addPropertiesToGlobal,
  addPropertiesToHistoricalData,
} from '../helpers';

function reducer(state = initialState, action = {}) {
  let filteredCountries;
  let withAdditionalData;

  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_DATA_SUCCESS':
      filteredCountries = filterCountries(action.countriesCovidData, action.countriesData);
      withAdditionalData = addPropertiesToSummaryData(filteredCountries, action.countriesCovidData);

      return {
        ...state,
        summaryCovidData: withAdditionalData,
        countriesData: filteredCountries,
        isLoading: false,
        summaryGlobalCovidData: addPropertiesToGlobal(withAdditionalData, action.globalCovidData),
        historicalGlobalCovidData: addPropertiesToGlobal(withAdditionalData, action.historicalTotalData),
      };

    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true,
        notifications: [...state.notifications, action.notification],
      };

    case 'FETCH_HISTORICAL_DATA_REQUEST':
      return {
        ...state,
        isChartLoading: true,
        hasChartError: false,
      };

    case 'FETCH_HISTORICAL_DATA_REQUEST_CANCEL':
      return {
        ...state,
        isChartLoading: false,
        hasChartError: false,
      };

    case 'FETCH_HISTORICAL_DATA_SUCCESS':
      const { historicalCovidData } = action;
      const historicalWithAdditionalData = addPropertiesToHistoricalData(state.summaryCovidData, historicalCovidData);

      return {
        ...state,
        historicalCovidData: [...state.historicalCovidData, historicalWithAdditionalData],
        isChartLoading: false,
      };

    case 'FETCH_HISTORICAL_DATA_FAILURE':
      return {
        ...state,
        isChartLoading: false,
        hasChartError: true,
        notifications: [...state.notifications, action.notification],
      };

    case 'FETCH_DATA_UPDATE_REQUEST':
      return {
        ...state,
        isUpdateLoading: true,
      };

    case 'FETCH_DATA_UPDATE_REQUEST_CANCEL':
      return {
        ...state,
        isUpdateLoading: false,
      };

    case 'FETCH_DATA_UPDATE_SUCCESS':
      filteredCountries = filterCountries(action.countriesCovidData, state.countriesData);
      withAdditionalData = addPropertiesToSummaryData(filteredCountries, action.countriesCovidData);

      return {
        ...state,
        summaryCovidData: withAdditionalData,
        countriesData: filteredCountries,
        isUpdateLoading: false,
        summaryGlobalCovidData: addPropertiesToGlobal(withAdditionalData, action.globalCovidData),
        historicalGlobalCovidData: addPropertiesToGlobal(withAdditionalData, action.historicalTotalData),
      };

    case 'FETCH_DATA_UPDATE_FAILURE':
      return {
        ...state,
        isUpdateLoading: false,
        hasError: false,
        notifications: [...state.notifications, action.notification],
      };

    case 'SET_IS_DATA_PER100':
      return {
        ...state,
        isDataPer100: action.isDataPer100,
      };

    case 'SET_IS_DATA_NEW':
      return {
        ...state,
        isDataNew: action.isDataNew,
      };

    case 'SET_DEFAULT_COUNTRY_CODE':
      return {
        ...state,
        countryCode: initialState.countryCode,
        hasChartError: false,
      };

    case 'SET_FILTER_CASE':
      return {
        ...state,
        filterCase: action.filterCase,
      };

    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.searchValue.toLowerCase(),
      };

    case 'SET_COUNTRY_CODE':
      if (action.countryCode) {
        const isValid = state.summaryCovidData
          .find(country => country.countryCode === action.countryCode);

        return {
          ...state,
          searchValue: initialState.searchValue,
          countryCode: isValid ? action.countryCode: initialState.countryCode,
        };
      } else {
        const filtered = state.summaryCovidData.filter((item) => {
          return item.country.toLowerCase().includes(state.searchValue.toLowerCase());
        });

        if (filtered.length === 1) {
          return {
            ...state,
            searchValue: initialState.searchValue,
            countryCode: filtered[0].countryCode,
          };
        }

        return { ...state };
      }

    case 'SET_IS_FULLSCREEN':
      return {
        ...state,
        isFullScreen: action.isFullScreen,
      };

    case 'DELETE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(({ id }) => id !== action.id),
      };

    case 'ADD_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      };

    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.sortBy,
      };

    case 'SET_SORT_ORDER':
      return {
        ...state,
        sortOrder: action.sortOrder,
      };

    default:
      return state;
  }
}

export default reducer;
