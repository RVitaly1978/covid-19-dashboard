const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST',
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    ...data,
  };
}

const fetchDataFailure = (notification) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    notification,
  };
}

const fetchHistoricalDataRequest = () => {
  return {
    type: 'FETCH_HISTORICAL_DATA_REQUEST',
  };
};

const fetchHistoricalDataRequestCancel = () => {
  return {
    type: 'FETCH_HISTORICAL_DATA_REQUEST_CANCEL',
  };
};

const fetchHistoricalDataSuccess = (historicalCovidData) => {
  return {
    type: 'FETCH_HISTORICAL_DATA_SUCCESS',
    historicalCovidData,
  };
}

const fetchHistoricalDataFailure = (notification) => {
  return {
    type: 'FETCH_HISTORICAL_DATA_FAILURE',
    notification,
  };
}

const fetchDataUpdateRequest = () => {
  return {
    type: 'FETCH_DATA_UPDATE_REQUEST',
  };
};

const fetchDataUpdateRequestCancel = () => {
  return {
    type: 'FETCH_DATA_UPDATE_REQUEST_CANCEL',
  };
};

const fetchDataUpdateSuccess = (data) => {
  return {
    type: 'FETCH_DATA_UPDATE_SUCCESS',
    ...data,
  };
}

const fetchDataUpdateFailure = (notification) => {
  return {
    type: 'FETCH_DATA_UPDATE_FAILURE',
    notification,
  };
}

const setSearchValue = (searchValue) => {
  return {
    type: 'SET_SEARCH_VALUE',
    searchValue,
  };
}

const setCountryCode = (countryCode) => {
  return {
    type: 'SET_COUNTRY_CODE',
    countryCode,
  };
}

const setFilterCase = (filterCase) => {
  return {
    type: 'SET_FILTER_CASE',
    filterCase,
  };
}

const setDefaultCountryCode = () => {
  return {
    type: 'SET_DEFAULT_COUNTRY_CODE',
  };
}

const setIsDataNew = (isDataNew) => {
  return {
    type: 'SET_IS_DATA_NEW',
    isDataNew,
  };
}

const setIsDataPer100 = (isDataPer100) => {
  return {
    type: 'SET_IS_DATA_PER100',
    isDataPer100,
  };
}

const setIsFullScreen = (isFullScreen) => {
  return {
    type: 'SET_IS_FULLSCREEN',
    isFullScreen,
  };
}

const deleteNotification = (id) => ({
  type: 'DELETE_NOTIFICATION',
  id,
});

const addNotification = (notification) => ({
  type: 'ADD_NOTIFICATION',
  notification,
});

const setSortBy = (sortBy) => {
  return {
    type: 'SET_SORT_BY',
    sortBy,
  };
}

const setSortOrder = (sortOrder) => {
  return {
    type: 'SET_SORT_ORDER',
    sortOrder,
  };
}

export {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  fetchHistoricalDataRequest,
  fetchHistoricalDataRequestCancel,
  fetchHistoricalDataSuccess,
  fetchHistoricalDataFailure,
  fetchDataUpdateRequest,
  fetchDataUpdateRequestCancel,
  fetchDataUpdateSuccess,
  fetchDataUpdateFailure,
  setSearchValue,
  setCountryCode,
  setFilterCase,
  setDefaultCountryCode,
  setIsDataNew,
  setIsDataPer100,
  setIsFullScreen,
  deleteNotification,
  addNotification,
  setSortBy,
  setSortOrder,
};
